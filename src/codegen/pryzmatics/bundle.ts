import * as _196 from "./asset/asset";
import * as _197 from "./bank/historical_bank_supply";
import * as _198 from "./common/time_resolution";
import * as _199 from "./database/flowtrade/flow_position_pair";
import * as _200 from "./database/gov/proposal";
import * as _201 from "./database/gov/vote";
import * as _202 from "./database/maturity/maturity";
import * as _203 from "./database/pgov/proposal";
import * as _204 from "./database/pgov/vote";
import * as _205 from "./database/trade/order";
import * as _206 from "./database/trade/user_pulse_trade_volume";
import * as _207 from "./database/trade/user_trade_history";
import * as _208 from "./database/ystaking/user_stake";
import * as _209 from "./flowtrade/flow_historical_price";
import * as _210 from "./flowtrade/flow_position_pair";
import * as _211 from "./flowtrade/flow";
import * as _212 from "./flowtrade/participation_type";
import * as _213 from "./gov/proposal";
import * as _214 from "./gov/tally_result";
import * as _215 from "./gov/vote";
import * as _216 from "./icns/icns";
import * as _217 from "./icstaking/host_chain";
import * as _218 from "./icstaking/transfer_channels";
import * as _219 from "./icstaking/validator_states";
import * as _220 from "./icstaking/validators";
import * as _221 from "./maturity/maturity";
import * as _222 from "./oracle/ballot_vote_result";
import * as _223 from "./oracle/pre_vote";
import * as _224 from "./oracle/slash_window_analysis";
import * as _225 from "./oracle/slash_window_statistics";
import * as _226 from "./oracle/slash_window";
import * as _227 from "./oracle/validator_slash_window_summary";
import * as _228 from "./oracle/validator_vote_interval_summary";
import * as _229 from "./oracle/validator";
import * as _230 from "./oracle/vote_interval_report";
import * as _231 from "./oracle/vote_interval";
import * as _232 from "./oracle/vote_summary";
import * as _233 from "./oracle/vote";
import * as _234 from "./pgov/proposal";
import * as _235 from "./pool/extended_pool";
import * as _236 from "./pool/historical_pool_apr";
import * as _237 from "./pool/historical_token_yield";
import * as _238 from "./pool/pool_apr";
import * as _239 from "./pool/pool_token";
import * as _240 from "./pool/pool";
import * as _241 from "./pool/token_yield";
import * as _242 from "./pool/token";
import * as _243 from "./price/historical_price";
import * as _244 from "./price/token_price";
import * as _245 from "./pryzmnexus/pryzmnexus";
import * as _246 from "./server/query";
import * as _247 from "./statistics/market_cap";
import * as _248 from "./statistics/misc";
import * as _249 from "./statistics/treasury";
import * as _250 from "./statistics/tvl";
import * as _251 from "./trade/directly_connected_token_pair";
import * as _252 from "./trade/operation_volume";
import * as _253 from "./trade/order";
import * as _254 from "./trade/pool_trade_history";
import * as _255 from "./trade/pryzm_claim_history_record";
import * as _256 from "./trade/pulse_tradable_pair";
import * as _257 from "./trade/route_steps";
import * as _258 from "./trade/swap_steps";
import * as _259 from "./trade/token_amounts";
import * as _260 from "./trade/trade_volume";
import * as _261 from "./trade/user_pulse_trade_volume";
import * as _262 from "./trade/user_trade_history";
import * as _263 from "./ystaking/user_stake";
import * as _358 from "./server/query.lcd";
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
    export const trade = {
      ..._205,
      ..._206,
      ..._207
    };
    export const ystaking = {
      ..._208
    };
  }
  export const flowtrade = {
    ..._209,
    ..._210,
    ..._211,
    ..._212
  };
  export const gov = {
    ..._213,
    ..._214,
    ..._215
  };
  export const icns = {
    ..._216
  };
  export const icstaking = {
    ..._217,
    ..._218,
    ..._219,
    ..._220
  };
  export const maturity = {
    ..._221
  };
  export const oracle = {
    ..._222,
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231,
    ..._232,
    ..._233
  };
  export const pgov = {
    ..._234
  };
  export const pool = {
    ..._235,
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._241,
    ..._242
  };
  export const price = {
    ..._243,
    ..._244
  };
  export const pryzmnexus = {
    ..._245
  };
  export const server = {
    ..._246,
    ..._358
  };
  export const statistics = {
    ..._247,
    ..._248,
    ..._249,
    ..._250
  };
  export const trade = {
    ..._251,
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._260,
    ..._261,
    ..._262
  };
  export const ystaking = {
    ..._263
  };
}