import { signalStoreFeature, withHooks } from "@ngrx/signals";
import { ENV } from "../store/environment";
import { withDevtools } from "@angular-architects/ngrx-toolkit";

export function withConditionDevtools(name: string) {
    return !ENV.production
        ? signalStoreFeature(
            withDevtools(name)
        )
        : ((store: any) => store)
}