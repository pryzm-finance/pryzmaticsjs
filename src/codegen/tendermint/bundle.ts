import * as _279 from "./abci/types";
import * as _280 from "./blocksync/types";
import * as _281 from "./crypto/keys";
import * as _282 from "./crypto/proof";
import * as _283 from "./libs/bits/types";
import * as _284 from "./p2p/types";
import * as _285 from "./types/block";
import * as _286 from "./types/evidence";
import * as _287 from "./types/params";
import * as _288 from "./types/types";
import * as _289 from "./types/validator";
import * as _290 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._279
  };
  export const blocksync = {
    ..._280
  };
  export const crypto = {
    ..._281,
    ..._282
  };
  export namespace libs {
    export const bits = {
      ..._283
    };
  }
  export const p2p = {
    ..._284
  };
  export const types = {
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._289
  };
  export const version = {
    ..._290
  };
}