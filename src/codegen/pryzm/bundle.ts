import * as _149 from "./amm/v1/event";
import * as _150 from "./amm/v1/genesis";
import * as _151 from "./amm/v1/operations";
import * as _152 from "./amm/v1/oracle_payload";
import * as _153 from "./amm/v1/oracle_price_pair";
import * as _154 from "./amm/v1/order";
import * as _155 from "./amm/v1/pair_match_proposal";
import * as _156 from "./amm/v1/params";
import * as _157 from "./amm/v1/pending_token_introduction";
import * as _158 from "./amm/v1/pool_token";
import * as _159 from "./amm/v1/pool";
import * as _160 from "./amm/v1/query";
import * as _161 from "./amm/v1/route_step";
import * as _162 from "./amm/v1/schedule_order_count";
import * as _163 from "./amm/v1/schedule_order";
import * as _164 from "./amm/v1/token_circuit_breaker_settings";
import * as _165 from "./amm/v1/token_weight";
import * as _166 from "./amm/v1/tx";
import * as _167 from "./amm/v1/virtual_balance_pool_token";
import * as _168 from "./amm/v1/weight_update_timing";
import * as _169 from "./amm/v1/weighted_token";
import * as _170 from "./amm/v1/whitelisted_route";
import * as _171 from "./amm/v1/yamm_configuration";
import * as _172 from "./icstaking/v1/event";
import * as _173 from "./icstaking/v1/genesis";
import * as _174 from "./icstaking/v1/host_chain";
import * as _175 from "./icstaking/v1/loopback";
import * as _176 from "./icstaking/v1/lsm";
import * as _177 from "./icstaking/v1/multisig";
import * as _178 from "./icstaking/v1/oracle_payload";
import * as _179 from "./icstaking/v1/params";
import * as _180 from "./icstaking/v1/query";
import * as _181 from "./icstaking/v1/reply";
import * as _182 from "./icstaking/v1/sweep";
import * as _183 from "./icstaking/v1/tx";
import * as _184 from "./icstaking/v1/undelegation";
import * as _185 from "./pgov/v1/event";
import * as _186 from "./pgov/v1/genesis";
import * as _187 from "./pgov/v1/params";
import * as _188 from "./pgov/v1/proposal";
import * as _189 from "./pgov/v1/query";
import * as _190 from "./pgov/v1/reply";
import * as _191 from "./pgov/v1/staked_p_asset";
import * as _192 from "./pgov/v1/tx";
import * as _193 from "./pgov/v1/vote";
import * as _335 from "./amm/v1/tx.amino";
import * as _336 from "./icstaking/v1/tx.amino";
import * as _337 from "./pgov/v1/tx.amino";
import * as _338 from "./amm/v1/tx.registry";
import * as _339 from "./icstaking/v1/tx.registry";
import * as _340 from "./pgov/v1/tx.registry";
import * as _341 from "./amm/v1/query.lcd";
import * as _342 from "./icstaking/v1/query.lcd";
import * as _343 from "./pgov/v1/query.lcd";
export namespace pryzm {
  export namespace amm {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._335,
      ..._338,
      ..._341
    };
  }
  export namespace icstaking {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._336,
      ..._339,
      ..._342
    };
  }
  export namespace pgov {
    export const v1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._337,
      ..._340,
      ..._343
    };
  }
}