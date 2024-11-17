import * as _270 from "./abci/types";
import * as _271 from "./blocksync/types";
import * as _272 from "./crypto/keys";
import * as _273 from "./crypto/proof";
import * as _274 from "./libs/bits/types";
import * as _275 from "./p2p/types";
import * as _276 from "./types/block";
import * as _277 from "./types/evidence";
import * as _278 from "./types/params";
import * as _279 from "./types/types";
import * as _280 from "./types/validator";
import * as _281 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._270
  };
  export const blocksync = {
    ..._271
  };
  export const crypto = {
    ..._272,
    ..._273
  };
  export namespace libs {
    export const bits = {
      ..._274
    };
  }
  export const p2p = {
    ..._275
  };
  export const types = {
    ..._276,
    ..._277,
    ..._278,
    ..._279,
    ..._280
  };
  export const version = {
    ..._281
  };
}