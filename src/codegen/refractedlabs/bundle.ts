import * as _251 from "./flowtrade/v1/events";
import * as _252 from "./flowtrade/v1/flow";
import * as _253 from "./flowtrade/v1/genesis";
import * as _254 from "./flowtrade/v1/params";
import * as _255 from "./flowtrade/v1/position";
import * as _256 from "./oracle/v1/event";
import * as _257 from "./oracle/v1/feeder_delegation";
import * as _258 from "./oracle/v1/genesis";
import * as _259 from "./oracle/v1/miss_counter";
import * as _260 from "./oracle/v1/oracle_pre_vote";
import * as _261 from "./oracle/v1/oracle_vote";
import * as _262 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262
    };
  }
}