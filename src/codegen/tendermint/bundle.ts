import * as _285 from "./abci/types";
import * as _286 from "./blocksync/types";
import * as _287 from "./crypto/keys";
import * as _288 from "./crypto/proof";
import * as _289 from "./libs/bits/types";
import * as _290 from "./p2p/types";
import * as _291 from "./types/block";
import * as _292 from "./types/evidence";
import * as _293 from "./types/params";
import * as _294 from "./types/types";
import * as _295 from "./types/validator";
import * as _296 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._285
  };
  export const blocksync = {
    ..._286
  };
  export const crypto = {
    ..._287,
    ..._288
  };
  export namespace libs {
    export const bits = {
      ..._289
    };
  }
  export const p2p = {
    ..._290
  };
  export const types = {
    ..._291,
    ..._292,
    ..._293,
    ..._294,
    ..._295
  };
  export const version = {
    ..._296
  };
}