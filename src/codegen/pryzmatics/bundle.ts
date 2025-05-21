import * as _196 from "./asset/asset";
import * as _197 from "./bank/historical_bank_supply";
import * as _198 from "./common/time_resolution";
import * as _199 from "./database/flowtrade/flow_position_pair";
import * as _200 from "./database/gov/proposal";
import * as _201 from "./database/gov/vote";
import * as _202 from "./database/maturity/maturity";
import * as _203 from "./database/orderbook/order";
import * as _204 from "./database/orderbook/reservation";
import * as _205 from "./database/pgov/proposal";
import * as _206 from "./database/pgov/vote";
import * as _207 from "./database/pvault/contract";
import * as _208 from "./database/trade/order";
import * as _209 from "./database/trade/user_pulse_trade_volume";
import * as _210 from "./database/trade/user_trade_history";
import * as _211 from "./database/ystaking/user_stake";
import * as _212 from "./flowtrade/flow_historical_price";
import * as _213 from "./flowtrade/flow_position_pair";
import * as _214 from "./flowtrade/flow";
import * as _215 from "./flowtrade/participation_type";
import * as _216 from "./gov/proposal";
import * as _217 from "./gov/tally_result";
import * as _218 from "./gov/vote";
import * as _219 from "./icns/icns";
import * as _220 from "./icstaking/host_chain";
import * as _221 from "./icstaking/transfer_channels";
import * as _222 from "./icstaking/validator_states";
import * as _223 from "./icstaking/validators";
import * as _224 from "./maturity/maturity";
import * as _225 from "./oracle/ballot_vote_result";
import * as _226 from "./oracle/pre_vote";
import * as _227 from "./oracle/slash_window_analysis";
import * as _228 from "./oracle/slash_window_statistics";
import * as _229 from "./oracle/slash_window";
import * as _230 from "./oracle/validator_slash_window_summary";
import * as _231 from "./oracle/validator_vote_interval_summary";
import * as _232 from "./oracle/validator";
import * as _233 from "./oracle/vote_interval_report";
import * as _234 from "./oracle/vote_interval";
import * as _235 from "./oracle/vote_summary";
import * as _236 from "./oracle/vote";
import * as _237 from "./orderbook/order";
import * as _238 from "./orderbook/reservation";
import * as _239 from "./pgov/proposal";
import * as _240 from "./pool/extended_pool";
import * as _241 from "./pool/historical_pool_apr";
import * as _242 from "./pool/historical_token_yield";
import * as _243 from "./pool/pool_apr";
import * as _244 from "./pool/pool_token";
import * as _245 from "./pool/pool";
import * as _246 from "./pool/token_yield";
import * as _247 from "./pool/token";
import * as _248 from "./price/historical_price";
import * as _249 from "./price/token_price";
import * as _250 from "./pryzmnexus/pryzmnexus";
import * as _251 from "./pvault/contract";
import * as _252 from "./server/query";
import * as _253 from "./statistics/historical_market_cap";
import * as _254 from "./statistics/market_cap";
import * as _255 from "./statistics/misc";
import * as _256 from "./statistics/treasury";
import * as _257 from "./statistics/tvl";
import * as _258 from "./trade/directly_connected_token_pair";
import * as _259 from "./trade/operation_volume";
import * as _260 from "./trade/order";
import * as _261 from "./trade/pool_trade_history";
import * as _262 from "./trade/pryzm_claim_history_record";
import * as _263 from "./trade/pulse_tradable_pair";
import * as _264 from "./trade/route_steps";
import * as _265 from "./trade/swap_steps";
import * as _266 from "./trade/token_amounts";
import * as _267 from "./trade/trade_volume";
import * as _268 from "./trade/user_pulse_trade_volume";
import * as _269 from "./trade/user_trade_history";
import * as _270 from "./ystaking/user_stake";
import * as _365 from "./server/query.lcd";
export namespace pryzmatics {
  export const asset = {
    ..._196
  };
  export const bank = {
    ..._197
  };
  export const common = {
    ..._198
  };
  export namespace database {
    export const flowtrade = {
      ..._199
    };
    export const gov = {
      ..._200,
      ..._201
    };
    export const maturity = {
      ..._202
    };
    export const orderbook = {
      ..._203,
      ..._204
    };
    export const pgov = {
      ..._205,
      ..._206
    };
    export const pvault = {
      ..._207
    };
    export const trade = {
      ..._208,
      ..._209,
      ..._210
    };
    export const ystaking = {
      ..._211
    };
  }
  export const flowtrade = {
    ..._212,
    ..._213,
    ..._214,
    ..._215
  };
  export const gov = {
    ..._216,
    ..._217,
    ..._218
  };
  export const icns = {
    ..._219
  };
  export const icstaking = {
    ..._220,
    ..._221,
    ..._222,
    ..._223
  };
  export const maturity = {
    ..._224
  };
  export const oracle = {
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236
  };
  export const orderbook = {
    ..._237,
    ..._238
  };
  export const pgov = {
    ..._239
  };
  export const pool = {
    ..._240,
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247
  };
  export const price = {
    ..._248,
    ..._249
  };
  export const pryzmnexus = {
    ..._250
  };
  export const pvault = {
    ..._251
  };
  export const server = {
    ..._252,
    ..._365
  };
  export const statistics = {
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257
  };
  export const trade = {
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263,
    ..._264,
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269
  };
  export const ystaking = {
    ..._270
  };
}