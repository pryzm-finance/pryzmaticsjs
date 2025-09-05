import * as _196 from "./asset/asset";
import * as _197 from "./bank/historical_bank_supply";
import * as _198 from "./common/time_resolution";
import * as _199 from "./database/flowtrade/flow_position_pair";
import * as _200 from "./database/gov/proposal";
import * as _201 from "./database/gov/vote";
import * as _202 from "./database/maturity/maturity";
import * as _203 from "./database/pgov/proposal";
import * as _204 from "./database/pgov/vote";
import * as _205 from "./database/pvault/contract";
import * as _206 from "./database/seal/activity";
import * as _207 from "./database/seal/order";
import * as _208 from "./database/seal/reservation";
import * as _209 from "./database/trade/order";
import * as _210 from "./database/trade/user_pair_trade_volume";
import * as _211 from "./database/trade/user_pulse_trade_volume";
import * as _212 from "./database/trade/user_trade_history";
import * as _213 from "./database/wasm/contract_info";
import * as _214 from "./database/ystaking/user_stake";
import * as _215 from "./flowtrade/flow_historical_price";
import * as _216 from "./flowtrade/flow_position_pair";
import * as _217 from "./flowtrade/flow";
import * as _218 from "./flowtrade/participation_type";
import * as _219 from "./gov/proposal";
import * as _220 from "./gov/tally_result";
import * as _221 from "./gov/vote";
import * as _222 from "./icns/icns";
import * as _223 from "./icstaking/host_chain";
import * as _224 from "./icstaking/transfer_channels";
import * as _225 from "./icstaking/validator_states";
import * as _226 from "./icstaking/validators";
import * as _227 from "./incentives/incentives";
import * as _228 from "./maturity/maturity";
import * as _229 from "./oracle/ballot_vote_result";
import * as _230 from "./oracle/pre_vote";
import * as _231 from "./oracle/slash_window_analysis";
import * as _232 from "./oracle/slash_window_statistics";
import * as _233 from "./oracle/slash_window";
import * as _234 from "./oracle/validator_slash_window_summary";
import * as _235 from "./oracle/validator_vote_interval_summary";
import * as _236 from "./oracle/validator";
import * as _237 from "./oracle/vote_interval_report";
import * as _238 from "./oracle/vote_interval";
import * as _239 from "./oracle/vote_summary";
import * as _240 from "./oracle/vote";
import * as _241 from "./pgov/proposal";
import * as _242 from "./pool/extended_pool";
import * as _243 from "./pool/historical_pool_apr";
import * as _244 from "./pool/historical_token_yield";
import * as _245 from "./pool/pool_apr";
import * as _246 from "./pool/pool_token";
import * as _247 from "./pool/pool";
import * as _248 from "./pool/token_yield";
import * as _249 from "./pool/token";
import * as _250 from "./price/historical_price";
import * as _251 from "./price/token_price";
import * as _252 from "./pryzmnexus/pryzmnexus";
import * as _253 from "./pvault/contract";
import * as _254 from "./seal/activity";
import * as _255 from "./seal/order";
import * as _256 from "./seal/pair";
import * as _257 from "./seal/reservation";
import * as _258 from "./server/query";
import * as _259 from "./statistics/historical_market_cap";
import * as _260 from "./statistics/market_cap";
import * as _261 from "./statistics/misc";
import * as _262 from "./statistics/treasury";
import * as _263 from "./statistics/tvl";
import * as _264 from "./trade/directly_connected_token_pair";
import * as _265 from "./trade/operation_volume";
import * as _266 from "./trade/order";
import * as _267 from "./trade/pool_trade_history";
import * as _268 from "./trade/pryzm_claim_history_record";
import * as _269 from "./trade/pulse_tradable_pair";
import * as _270 from "./trade/route_steps";
import * as _271 from "./trade/swap_steps";
import * as _272 from "./trade/token_amounts";
import * as _273 from "./trade/trade_volume";
import * as _274 from "./trade/user_pair_trade_volume";
import * as _275 from "./trade/user_pulse_trade_volume";
import * as _276 from "./trade/user_trade_history";
import * as _277 from "./wasm/contract_info";
import * as _278 from "./ystaking/user_stake";
import * as _373 from "./server/query.lcd";
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
    export const pgov = {
      ..._203,
      ..._204
    };
    export const pvault = {
      ..._205
    };
    export const seal = {
      ..._206,
      ..._207,
      ..._208
    };
    export const trade = {
      ..._209,
      ..._210,
      ..._211,
      ..._212
    };
    export const wasm = {
      ..._213
    };
    export const ystaking = {
      ..._214
    };
  }
  export const flowtrade = {
    ..._215,
    ..._216,
    ..._217,
    ..._218
  };
  export const gov = {
    ..._219,
    ..._220,
    ..._221
  };
  export const icns = {
    ..._222
  };
  export const icstaking = {
    ..._223,
    ..._224,
    ..._225,
    ..._226
  };
  export const incentives = {
    ..._227
  };
  export const maturity = {
    ..._228
  };
  export const oracle = {
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240
  };
  export const pgov = {
    ..._241
  };
  export const pool = {
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249
  };
  export const price = {
    ..._250,
    ..._251
  };
  export const pryzmnexus = {
    ..._252
  };
  export const pvault = {
    ..._253
  };
  export const seal = {
    ..._254,
    ..._255,
    ..._256,
    ..._257
  };
  export const server = {
    ..._258,
    ..._373
  };
  export const statistics = {
    ..._259,
    ..._260,
    ..._261,
    ..._262,
    ..._263
  };
  export const trade = {
    ..._264,
    ..._265,
    ..._266,
    ..._267,
    ..._268,
    ..._269,
    ..._270,
    ..._271,
    ..._272,
    ..._273,
    ..._274,
    ..._275,
    ..._276
  };
  export const wasm = {
    ..._277
  };
  export const ystaking = {
    ..._278
  };
}