import * as _273 from "./flowtrade/v1/events";
import * as _274 from "./flowtrade/v1/flow";
import * as _275 from "./flowtrade/v1/genesis";
import * as _276 from "./flowtrade/v1/params";
import * as _277 from "./flowtrade/v1/position";
import * as _278 from "./oracle/v1/event";
import * as _279 from "./oracle/v1/feeder_delegation";
import * as _280 from "./oracle/v1/genesis";
import * as _281 from "./oracle/v1/miss_counter";
import * as _282 from "./oracle/v1/oracle_pre_vote";
import * as _283 from "./oracle/v1/oracle_vote";
import * as _284 from "./oracle/v1/params";
export namespace refractedlabs {
  export namespace flowtrade {
    export const v1 = {
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._278,
      ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284
    };
  }
}