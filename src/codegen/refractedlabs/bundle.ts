import * as _255 from "./flowtrade/v1/events";
import * as _256 from "./flowtrade/v1/flow";
import * as _257 from "./flowtrade/v1/genesis";
import * as _258 from "./flowtrade/v1/params";
import * as _259 from "./flowtrade/v1/position";
import * as _260 from "./oracle/v1/event";
import * as _261 from "./oracle/v1/feeder_delegation";
import * as _262 from "./oracle/v1/genesis";
import * as _263 from "./oracle/v1/miss_counter";
import * as _264 from "./oracle/v1/oracle_pre_vote";
import * as _265 from "./oracle/v1/oracle_vote";
import * as _266 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._266
    };
  }
}