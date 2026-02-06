import type { Result } from 'generic-result-type';
import { failure, success } from 'generic-result-type';
import * as jose from 'jose';

import type { School } from '@/domain/school';

const base64SecretDesign = process.env.JWT_SECRET_BASE64_DESIGN;
if (!base64SecretDesign) {
  throw new Error('Environment variable JWT_SECRET_BASE64_DESIGN not found');
}

const base64SecretEvent = process.env.JWT_SECRET_BASE64_EVENT;
if (!base64SecretEvent) {
  throw new Error('Environment variable JWT_SECRET_BASE64_EVENT not found');
}

const base64SecretPet = process.env.JWT_SECRET_BASE64_PET;
if (!base64SecretPet) {
  throw new Error('Environment variable JWT_SECRET_BASE64_PET not found');
}

const base64SecretWellness = process.env.JWT_SECRET_BASE64_WELLNESS;
if (!base64SecretWellness) {
  throw new Error('Environment variable JWT_SECRET_BASE64_WELLNESS not found');
}

const secrets: Record<School, Buffer<ArrayBuffer>> = {
  'QC Design School': Buffer.from(base64SecretDesign, 'base64'),
  'QC Event School': Buffer.from(base64SecretEvent, 'base64'),
  'QC Makeup Academy': Buffer.from(base64SecretEvent, 'base64'),
  'QC Pet Studies': Buffer.from(base64SecretPet, 'base64'),
  'QC Wellness Studies': Buffer.from(base64SecretWellness, 'base64'),
  'Winghill Writing School': Buffer.from(base64SecretEvent, 'base64'),
  'QC Career School': Buffer.from(base64SecretEvent, 'base64'),
};

for (const value of Object.values(secrets)) {
  if (value.length !== 32) {
    throw new Error('key must decode to 32 bytes');
  }
}

const getInfo = (school: School): [ issuer: string, audience: string, secret: Buffer<ArrayBuffer> ] => {
  let urn: string;
  let secret: Buffer<ArrayBuffer>;
  switch (school) {
    case 'QC Design School':
      urn = 'urn:qcdesignschool.com:';
      secret = secrets['QC Design School'];
      break;
    case 'QC Event School':
      urn = 'urn:qceventplanning.com:';
      secret = secrets['QC Event School'];
      break;
    case 'QC Makeup Academy':
      urn = 'urn:qcmakeupacademy.com:';
      secret = secrets['QC Makeup Academy'];
      break;
    case 'QC Pet Studies':
      urn = 'urn:qcpetstudies.com:';
      secret = secrets['QC Pet Studies'];
      break;
    case 'Winghill Writing School':
      urn = 'urn:winghill.com:';
      secret = secrets['Winghill Writing School'];
      break;
    case 'QC Wellness Studies':
      urn = 'urn:qcwellnessstudies.com:';
      secret = secrets['QC Wellness Studies'];
      break;
    case 'QC Career School':
      urn = 'urn:qccareerschool.com:';
      secret = secrets['QC Career School'];
      break;
  }
  const issuer = `${urn}issuer`;
  const audience = `${urn}audience`;

  return [ issuer, audience, secret ];
};

export const decodeJwt = async (jwt: string, school: School): Promise<Result<Record<string, unknown>>> => {
  const [ issuer, audience, secret ] = getInfo(school);

  try {
    const { payload } = await jose.jwtDecrypt<Record<string, unknown>>(jwt, secret, { issuer, audience });
    return success(payload);
  } catch (err) {
    return failure(err instanceof Error ? err : Error(String(err)));
  }
};
