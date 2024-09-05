import * as _196 from "./asset/asset";
import * as _197 from "./common/time_resolution";
import * as _198 from "./database/flowtrade/flow_position_pair";
import * as _199 from "./database/gov/proposal";
import * as _200 from "./database/gov/vote";
import * as _201 from "./database/maturity/maturity";
import * as _202 from "./database/pgov/proposal";
import * as _203 from "./database/pgov/vote";
import * as _204 from "./database/trade/order";
import * as _205 from "./database/trade/user_trade_history";
import * as _206 from "./database/ystaking/user_stake";
import * as _207 from "./flowtrade/flow_historical_price";
import * as _208 from "./flowtrade/flow_position_pair";
import * as _209 from "./flowtrade/participation_type";
import * as _210 from "./gov/proposal";
import * as _211 from "./gov/tally_result";
import * as _212 from "./gov/vote";
import * as _213 from "./icstaking/host_chain";
import * as _214 from "./icstaking/transfer_channels";
import * as _215 from "./icstaking/validator_states";
import * as _216 from "./icstaking/validators";
import * as _217 from "./maturity/maturity";
import * as _218 from "./oracle/ballot_vote_result";
import * as _219 from "./oracle/pre_vote";
import * as _220 from "./oracle/slash_window_analysis";
import * as _221 from "./oracle/slash_window_statistics";
import * as _222 from "./oracle/slash_window";
import * as _223 from "./oracle/validator_slash_window_summary";
import * as _224 from "./oracle/validator_vote_interval_summary";
import * as _225 from "./oracle/validator";
import * as _226 from "./oracle/vote_interval_report";
import * as _227 from "./oracle/vote_interval";
import * as _228 from "./oracle/vote_summary";
import * as _229 from "./oracle/vote";
import * as _230 from "./pgov/proposal";
import * as _231 from "./pool/extended_pool";
import * as _232 from "./pool/historical_pool_apr";
import * as _233 from "./pool/historical_token_yield";
import * as _234 from "./pool/pool_apr";
import * as _235 from "./pool/pool_token";
import * as _236 from "./pool/pool";
import * as _237 from "./pool/token_yield";
import * as _238 from "./pool/token";
import * as _239 from "./price/historical_price";
import * as _240 from "./price/token_price";
import * as _241 from "./server/query";
import * as _242 from "./statistics/market_cap";
import * as _243 from "./statistics/misc";
import * as _244 from "./statistics/treasury";
import * as _245 from "./statistics/tvl";
import * as _246 from "./trade/directly_connected_token_pair";
import * as _247 from "./trade/operation_volume";
import * as _248 from "./trade/order";
import * as _249 from "./trade/pool_trade_history";
import * as _250 from "./trade/pulse_tradable_pair";
import * as _251 from "./trade/route_steps";
import * as _252 from "./trade/swap_steps";
import * as _253 from "./trade/token_amounts";
import * as _254 from "./trade/trade_volume";
import * as _255 from "./trade/user_trade_history";
import * as _256 from "./ystaking/user_stake";
import * as _351 from "./server/query.lcd";
export namespace pryzmatics {
  export const asset = {
    ..._196
  };
  export const common = {
    ..._197
  };
  export namespace database {
    export const flowtrade = {
      ..._198
    };
    export const gov = {
      ..._199,
      ..._200
    };
    export const maturity = {
      ..._201
    };
    export const pgov = {
      ..._202,
      ..._203
    };
    export const trade = {
      ..._204,
      ..._205
    };
    export const ystaking = {
      ..._206
    };
  }
  export const flowtrade = {
    ..._207,
    ..._208,
    ..._209
  };
  export const gov = {
    ..._210,
    ..._211,
    ..._212
  };
  export const icstaking = {
    ..._213,
    ..._214,
    ..._215,
    ..._216
  };
  export const maturity = {
    ..._217
  };
  export const oracle = {
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229
  };
  export const pgov = {
    ..._230
  };
  export const pool = {
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._238
  };
  export const price = {
    ..._239,
    ..._240
  };
  export const server = {
    ..._241,
    ..._351
  };
  export const statistics = {
    ..._242,
    ..._243,
    ..._244,
    ..._245
  };
  export const trade = {
    ..._246,
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255
  };
  export const ystaking = {
    ..._256
  };
}