import * as _263 from "./abci/types";
import * as _264 from "./blocksync/types";
import * as _265 from "./crypto/keys";
import * as _266 from "./crypto/proof";
import * as _267 from "./libs/bits/types";
import * as _268 from "./p2p/types";
import * as _269 from "./types/block";
import * as _270 from "./types/evidence";
import * as _271 from "./types/params";
import * as _272 from "./types/types";
import * as _273 from "./types/validator";
import * as _274 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._263
  };
  export const blocksync = {
    ..._264
  };
  export const crypto = {
    ..._265,
    ..._266
  };
  export namespace libs {
    export const bits = {
      ..._267
    };
  }
  export const p2p = {
    ..._268
  };
  export const types = {
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273
  };
  export const version = {
    ..._274
  };
}