import { listMetadataKey, maxMetadataKey, minMetadataKey, orMetadataKey } from "@angular/forms/signals";

export const LABEL = listMetadataKey<string>();

export const MIN_WORDS = maxMetadataKey();

export const CAPTIALIZE = orMetadataKey();