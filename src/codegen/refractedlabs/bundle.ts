import * as _263 from "./flowtrade/v1/events";
import * as _264 from "./flowtrade/v1/flow";
import * as _265 from "./flowtrade/v1/genesis";
import * as _266 from "./flowtrade/v1/params";
import * as _267 from "./flowtrade/v1/position";
import * as _268 from "./oracle/v1/event";
import * as _269 from "./oracle/v1/feeder_delegation";
import * as _270 from "./oracle/v1/genesis";
import * as _271 from "./oracle/v1/miss_counter";
import * as _272 from "./oracle/v1/oracle_pre_vote";
import * as _273 from "./oracle/v1/oracle_vote";
import * as _274 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274
    };
  }
}