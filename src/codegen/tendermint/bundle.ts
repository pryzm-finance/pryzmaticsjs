import * as _271 from "./abci/types";
import * as _272 from "./blocksync/types";
import * as _273 from "./crypto/keys";
import * as _274 from "./crypto/proof";
import * as _275 from "./libs/bits/types";
import * as _276 from "./p2p/types";
import * as _277 from "./types/block";
import * as _278 from "./types/evidence";
import * as _279 from "./types/params";
import * as _280 from "./types/types";
import * as _281 from "./types/validator";
import * as _282 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._271
  };
  export const blocksync = {
    ..._272
  };
  export const crypto = {
    ..._273,
    ..._274
  };
  export namespace libs {
    export const bits = {
      ..._275
    };
  }
  export const p2p = {
    ..._276
  };
  export const types = {
    ..._277,
    ..._278,
    ..._279,
    ..._280,
    ..._281
  };
  export const version = {
    ..._282
  };
}