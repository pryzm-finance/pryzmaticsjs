import * as _259 from "./flowtrade/v1/events";
import * as _260 from "./flowtrade/v1/flow";
import * as _261 from "./flowtrade/v1/genesis";
import * as _262 from "./flowtrade/v1/params";
import * as _263 from "./flowtrade/v1/position";
import * as _264 from "./oracle/v1/event";
import * as _265 from "./oracle/v1/feeder_delegation";
import * as _266 from "./oracle/v1/genesis";
import * as _267 from "./oracle/v1/miss_counter";
import * as _268 from "./oracle/v1/oracle_pre_vote";
import * as _269 from "./oracle/v1/oracle_vote";
import * as _270 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270
    };
  }
}