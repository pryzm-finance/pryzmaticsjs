import * as _194 from "./asset/asset";
import * as _195 from "./bank/historical_bank_supply";
import * as _196 from "./common/time_resolution";
import * as _197 from "./database/flowtrade/flow_position_pair";
import * as _198 from "./database/gov/proposal";
import * as _199 from "./database/gov/vote";
import * as _200 from "./database/maturity/maturity";
import * as _201 from "./database/pgov/proposal";
import * as _202 from "./database/pgov/vote";
import * as _203 from "./database/pvault/contract";
import * as _204 from "./database/seal/activity";
import * as _205 from "./database/seal/order";
import * as _206 from "./database/seal/pair";
import * as _207 from "./database/seal/reservation";
import * as _208 from "./database/trade/order";
import * as _209 from "./database/trade/user_pair_trade_volume";
import * as _210 from "./database/trade/user_pulse_trade_volume";
import * as _211 from "./database/trade/user_trade_history";
import * as _212 from "./database/wasm/contract_info";
import * as _213 from "./database/ystaking/user_stake";
import * as _214 from "./flowtrade/flow_historical_price";
import * as _215 from "./flowtrade/flow_position_pair";
import * as _216 from "./flowtrade/flow";
import * as _217 from "./flowtrade/participation_type";
import * as _218 from "./gov/proposal";
import * as _219 from "./gov/tally_result";
import * as _220 from "./gov/vote";
import * as _221 from "./icns/icns";
import * as _222 from "./icstaking/host_chain";
import * as _223 from "./icstaking/transfer_channels";
import * as _224 from "./icstaking/validator_states";
import * as _225 from "./icstaking/validators";
import * as _226 from "./incentives/incentives";
import * as _227 from "./maturity/maturity";
import * as _228 from "./oracle/ballot_vote_result";
import * as _229 from "./oracle/pre_vote";
import * as _230 from "./oracle/slash_window_analysis";
import * as _231 from "./oracle/slash_window_statistics";
import * as _232 from "./oracle/slash_window";
import * as _233 from "./oracle/validator_slash_window_summary";
import * as _234 from "./oracle/validator_vote_interval_summary";
import * as _235 from "./oracle/validator";
import * as _236 from "./oracle/vote_interval_report";
import * as _237 from "./oracle/vote_interval";
import * as _238 from "./oracle/vote_summary";
import * as _239 from "./oracle/vote";
import * as _240 from "./pgov/proposal";
import * as _241 from "./pool/extended_pool";
import * as _242 from "./pool/historical_pool_apr";
import * as _243 from "./pool/historical_token_yield";
import * as _244 from "./pool/pool_apr";
import * as _245 from "./pool/pool_token";
import * as _246 from "./pool/pool";
import * as _247 from "./pool/token_yield";
import * as _248 from "./pool/token";
import * as _249 from "./price/historical_price";
import * as _250 from "./price/token_price";
import * as _251 from "./pryzmnexus/pryzmnexus";
import * as _252 from "./pvault/contract";
import * as _253 from "./seal/activity";
import * as _254 from "./seal/order";
import * as _255 from "./seal/pair";
import * as _256 from "./seal/reservation";
import * as _257 from "./server/query";
import * as _258 from "./statistics/historical_market_cap";
import * as _259 from "./statistics/market_cap";
import * as _260 from "./statistics/misc";
import * as _261 from "./statistics/treasury";
import * as _262 from "./statistics/tvl";
import * as _263 from "./trade/directly_connected_token_pair";
import * as _264 from "./trade/operation_volume";
import * as _265 from "./trade/order";
import * as _266 from "./trade/pool_trade_history";
import * as _267 from "./trade/pryzm_claim_history_record";
import * as _268 from "./trade/pulse_tradable_pair";
import * as _269 from "./trade/route_steps";
import * as _270 from "./trade/swap_steps";
import * as _271 from "./trade/token_amounts";
import * as _272 from "./trade/trade_volume";
import * as _273 from "./trade/user_pair_trade_volume";
import * as _274 from "./trade/user_pulse_trade_volume";
import * as _275 from "./trade/user_trade_history";
import * as _276 from "./wasm/contract_info";
import * as _277 from "./ystaking/user_stake";
import * as _372 from "./server/query.lcd";
export namespace pryzmatics {
  export const asset = {
    ..._194
  };
  export const bank = {
    ..._195
  };
  export const common = {
    ..._196
  };
  export namespace database {
    export const flowtrade = {
      ..._197
    };
    export const gov = {
      ..._198,
      ..._199
    };
    export const maturity = {
      ..._200
    };
    export const pgov = {
      ..._201,
      ..._202
    };
    export const pvault = {
      ..._203
    };
    export const seal = {
      ..._204,
      ..._205,
      ..._206,
      ..._207
    };
    export const trade = {
      ..._208,
      ..._209,
      ..._210,
      ..._211
    };
    export const wasm = {
      ..._212
    };
    export const ystaking = {
      ..._213
    };
  }
  export const flowtrade = {
    ..._214,
    ..._215,
    ..._216,
    ..._217
  };
  export const gov = {
    ..._218,
    ..._219,
    ..._220
  };
  export const icns = {
    ..._221
  };
  export const icstaking = {
    ..._222,
    ..._223,
    ..._224,
    ..._225
  };
  export const incentives = {
    ..._226
  };
  export const maturity = {
    ..._227
  };
  export const oracle = {
    ..._228,
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
    ..._239
  };
  export const pgov = {
    ..._240
  };
  export const pool = {
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._245,
    ..._246,
    ..._247,
    ..._248
  };
  export const price = {
    ..._249,
    ..._250
  };
  export const pryzmnexus = {
    ..._251
  };
  export const pvault = {
    ..._252
  };
  export const seal = {
    ..._253,
    ..._254,
    ..._255,
    ..._256
  };
  export const server = {
    ..._257,
    ..._372
  };
  export const statistics = {
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const trade = {
    ..._263,
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
    ..._275
  };
  export const wasm = {
    ..._276
  };
  export const ystaking = {
    ..._277
  };
}