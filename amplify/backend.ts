import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { twilioVoiceBot } from './functions/twilio-voice-bot/resource.js';

defineBackend({
  auth,
  data,
  twilioVoiceBot
});
