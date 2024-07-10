import * as _194 from "./asset/asset";
import * as _195 from "./common/time_resolution";
import * as _196 from "./database/flowtrade/flow_position_pair";
import * as _197 from "./database/gov/proposal";
import * as _198 from "./database/gov/vote";
import * as _199 from "./database/maturity/maturity";
import * as _200 from "./database/trade/order";
import * as _201 from "./database/trade/user_trade_history";
import * as _202 from "./flowtrade/flow_historical_price";
import * as _203 from "./flowtrade/flow_position_pair";
import * as _204 from "./flowtrade/participation_type";
import * as _205 from "./gov/proposal";
import * as _206 from "./gov/tally_result";
import * as _207 from "./gov/vote";
import * as _208 from "./icstaking/host_chain";
import * as _209 from "./icstaking/transfer_channels";
import * as _210 from "./icstaking/validator_states";
import * as _211 from "./icstaking/validators";
import * as _212 from "./maturity/maturity";
import * as _213 from "./oracle/ballot_vote_result";
import * as _214 from "./oracle/pre_vote";
import * as _215 from "./oracle/slash_window_analysis";
import * as _216 from "./oracle/slash_window";
import * as _217 from "./oracle/validator_slash_window_summary";
import * as _218 from "./oracle/validator_vote_interval_summary";
import * as _219 from "./oracle/validator";
import * as _220 from "./oracle/vote_interval_report";
import * as _221 from "./oracle/vote_interval";
import * as _222 from "./oracle/vote_summary";
import * as _223 from "./oracle/vote";
import * as _224 from "./pgov/pgov";
import * as _225 from "./pool/extended_pool";
import * as _226 from "./pool/historical_pool_apr";
import * as _227 from "./pool/historical_token_yield";
import * as _228 from "./pool/pool_apr";
import * as _229 from "./pool/pool_token";
import * as _230 from "./pool/pool";
import * as _231 from "./pool/token_yield";
import * as _232 from "./pool/token";
import * as _233 from "./price/historical_price";
import * as _234 from "./price/token_price";
import * as _235 from "./server/query";
import * as _236 from "./statistics/market_cap";
import * as _237 from "./statistics/misc";
import * as _238 from "./statistics/treasury";
import * as _239 from "./statistics/tvl";
import * as _240 from "./trade/directly_connected_token_pair";
import * as _241 from "./trade/operation_volume";
import * as _242 from "./trade/order";
import * as _243 from "./trade/pool_trade_history";
import * as _244 from "./trade/pulse_tradable_pair";
import * as _245 from "./trade/route_steps";
import * as _246 from "./trade/swap_steps";
import * as _247 from "./trade/token_amounts";
import * as _248 from "./trade/trade_volume";
import * as _249 from "./trade/user_trade_history";
import * as _250 from "./ystaking/user_stake";
import * as _343 from "./server/query.lcd";
export namespace pryzmatics {
  export const asset = {
    ..._194
  };
  export const common = {
    ..._195
  };
  export namespace database {
    export const flowtrade = {
      ..._196
    };
    export const gov = {
      ..._197,
      ..._198
    };
    export const maturity = {
      ..._199
    };
    export const trade = {
      ..._200,
      ..._201
    };
  }
  export const flowtrade = {
    ..._202,
    ..._203,
    ..._204
  };
  export const gov = {
    ..._205,
    ..._206,
    ..._207
  };
  export const icstaking = {
    ..._208,
    ..._209,
    ..._210,
    ..._211
  };
  export const maturity = {
    ..._212
  };
  export const oracle = {
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217,
    ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223
  };
  export const pgov = {
    ..._224
  };
  export const pool = {
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232
  };
  export const price = {
    ..._233,
    ..._234
  };
  export const server = {
    ..._235,
    ..._343
  };
  export const statistics = {
    ..._236,
    ..._237,
    ..._238,
    ..._239
  };
  export const trade = {
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249
  };
  export const ystaking = {
    ..._250
  };
}