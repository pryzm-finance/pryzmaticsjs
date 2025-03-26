import * as _278 from "./abci/types";
import * as _279 from "./blocksync/types";
import * as _280 from "./crypto/keys";
import * as _281 from "./crypto/proof";
import * as _282 from "./libs/bits/types";
import * as _283 from "./p2p/types";
import * as _284 from "./types/block";
import * as _285 from "./types/evidence";
import * as _286 from "./types/params";
import * as _287 from "./types/types";
import * as _288 from "./types/validator";
import * as _289 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._278
  };
  export const blocksync = {
    ..._279
  };
  export const crypto = {
    ..._280,
    ..._281
  };
  export namespace libs {
    export const bits = {
      ..._282
    };
  }
  export const p2p = {
    ..._283
  };
  export const types = {
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._288
  };
  export const version = {
    ..._289
  };
}