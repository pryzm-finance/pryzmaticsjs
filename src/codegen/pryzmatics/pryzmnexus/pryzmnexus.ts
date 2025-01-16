import { Coin as Coin1 } from "../../cosmos/base/v1beta1/coin";
import { CoinAmino as Coin1Amino } from "../../cosmos/base/v1beta1/coin";
import { CoinSDKType as Coin1SDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export enum SimulationType {
  given_in = 0,
  given_out = 1,
  UNRECOGNIZED = -1,
}
export const SimulationTypeSDKType = SimulationType;
export const SimulationTypeAmino = SimulationType;
export function simulationTypeFromJSON(object: any): SimulationType {
  switch (object) {
    case 0:
    case "given_in":
      return SimulationType.given_in;
    case 1:
    case "given_out":
      return SimulationType.given_out;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SimulationType.UNRECOGNIZED;
  }
}
export function simulationTypeToJSON(object: SimulationType): string {
  switch (object) {
    case SimulationType.given_in:
      return "given_in";
    case SimulationType.given_out:
      return "given_out";
    case SimulationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** StakeContractType enumeration. */
export enum StakeContractType {
  auu_staking = 0,
  UNRECOGNIZED = -1,
}
export const StakeContractTypeSDKType = StakeContractType;
export const StakeContractTypeAmino = StakeContractType;
export function stakeContractTypeFromJSON(object: any): StakeContractType {
  switch (object) {
    case 0:
    case "auu_staking":
      return StakeContractType.auu_staking;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeContractType.UNRECOGNIZED;
  }
}
export function stakeContractTypeToJSON(object: StakeContractType): string {
  switch (object) {
    case StakeContractType.auu_staking:
      return "auu_staking";
    case StakeContractType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Coin represents a token with an amount and denomination. */
export interface Coin {
  amount: string;
  denom: string;
}
export interface CoinProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Coin";
  value: Uint8Array;
}
/** Coin represents a token with an amount and denomination. */
export interface CoinAmino {
  amount?: string;
  denom?: string;
}
export interface CoinAminoMsg {
  type: "/pryzmatics.pryzmnexus.Coin";
  value: CoinAmino;
}
/** Coin represents a token with an amount and denomination. */
export interface CoinSDKType {
  amount: string;
  denom: string;
}
/** InstantiateMsg is an empty message. */
export interface InstantiateMsg {}
export interface InstantiateMsgProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.InstantiateMsg";
  value: Uint8Array;
}
/** InstantiateMsg is an empty message. */
export interface InstantiateMsgAmino {}
export interface InstantiateMsgAminoMsg {
  type: "/pryzmatics.pryzmnexus.InstantiateMsg";
  value: InstantiateMsgAmino;
}
/** InstantiateMsg is an empty message. */
export interface InstantiateMsgSDKType {}
/** ExecuteMsg includes various types of executable commands. */
export interface ExecuteMsg {
  zeroImpactJoinAssetToNested?: ExecuteMsg_ZeroImpactJoinAssetToNested;
  zeroImpactJoinAssetToYamm?: ExecuteMsg_ZeroImpactJoinAssetToYamm;
  batch?: ExecuteMsg_Batch;
  setStakeContract?: ExecuteMsg_SetStakeContract;
  removeStakeContract?: ExecuteMsg_RemoveStakeContract;
  pause?: ExecuteMsg_Pause;
  unpause?: ExecuteMsg_Unpause;
  updateAdmin?: ExecuteMsg_UpdateAdmin;
}
export interface ExecuteMsgProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg";
  value: Uint8Array;
}
/** ExecuteMsg includes various types of executable commands. */
export interface ExecuteMsgAmino {
  zero_impact_join_asset_to_nested?: ExecuteMsg_ZeroImpactJoinAssetToNestedAmino;
  zero_impact_join_asset_to_yamm?: ExecuteMsg_ZeroImpactJoinAssetToYammAmino;
  batch?: ExecuteMsg_BatchAmino;
  set_stake_contract?: ExecuteMsg_SetStakeContractAmino;
  remove_stake_contract?: ExecuteMsg_RemoveStakeContractAmino;
  pause?: ExecuteMsg_PauseAmino;
  unpause?: ExecuteMsg_UnpauseAmino;
  update_admin?: ExecuteMsg_UpdateAdminAmino;
}
export interface ExecuteMsgAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg";
  value: ExecuteMsgAmino;
}
/** ExecuteMsg includes various types of executable commands. */
export interface ExecuteMsgSDKType {
  zero_impact_join_asset_to_nested?: ExecuteMsg_ZeroImpactJoinAssetToNestedSDKType;
  zero_impact_join_asset_to_yamm?: ExecuteMsg_ZeroImpactJoinAssetToYammSDKType;
  batch?: ExecuteMsg_BatchSDKType;
  set_stake_contract?: ExecuteMsg_SetStakeContractSDKType;
  remove_stake_contract?: ExecuteMsg_RemoveStakeContractSDKType;
  pause?: ExecuteMsg_PauseSDKType;
  unpause?: ExecuteMsg_UnpauseSDKType;
  update_admin?: ExecuteMsg_UpdateAdminSDKType;
}
/** MigrateMsg is an empty message. */
export interface MigrateMsg {}
export interface MigrateMsgProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.MigrateMsg";
  value: Uint8Array;
}
/** MigrateMsg is an empty message. */
export interface MigrateMsgAmino {}
export interface MigrateMsgAminoMsg {
  type: "/pryzmatics.pryzmnexus.MigrateMsg";
  value: MigrateMsgAmino;
}
/** MigrateMsg is an empty message. */
export interface MigrateMsgSDKType {}
/** QueryMsg includes various types of query commands. */
export interface QueryMsg {
  simulateZeroImpactJoinAssetToNested?: QueryMsg_SimulateZeroImpactJoinAssetToNested;
  simulateZeroImpactJoinAssetToYamm?: QueryMsg_SimulateZeroImpactJoinAssetToYamm;
  simulateBatch?: QueryMsg_SimulateBatch;
  stakeContracts?: QueryMsg_StakeContracts;
  stakeContract?: QueryMsg_StakeContract;
  paused?: QueryMsg_Paused;
  admin?: QueryMsg_Admin;
}
export interface QueryMsgProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg";
  value: Uint8Array;
}
/** QueryMsg includes various types of query commands. */
export interface QueryMsgAmino {
  simulate_zero_impact_join_asset_to_nested?: QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino;
  simulate_zero_impact_join_asset_to_yamm?: QueryMsg_SimulateZeroImpactJoinAssetToYammAmino;
  simulate_batch?: QueryMsg_SimulateBatchAmino;
  stake_contracts?: QueryMsg_StakeContractsAmino;
  stake_contract?: QueryMsg_StakeContractAmino;
  paused?: QueryMsg_PausedAmino;
  admin?: QueryMsg_AdminAmino;
}
export interface QueryMsgAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg";
  value: QueryMsgAmino;
}
/** QueryMsg includes various types of query commands. */
export interface QueryMsgSDKType {
  simulate_zero_impact_join_asset_to_nested?: QueryMsg_SimulateZeroImpactJoinAssetToNestedSDKType;
  simulate_zero_impact_join_asset_to_yamm?: QueryMsg_SimulateZeroImpactJoinAssetToYammSDKType;
  simulate_batch?: QueryMsg_SimulateBatchSDKType;
  stake_contracts?: QueryMsg_StakeContractsSDKType;
  stake_contract?: QueryMsg_StakeContractSDKType;
  paused?: QueryMsg_PausedSDKType;
  admin?: QueryMsg_AdminSDKType;
}
/** QueryMsg_SimulateBatch represents a simulation query for a batch operation. */
export interface QueryMsg_SimulateBatch {
  operations: Operation[];
  amounts: Coin[];
  simulationType: SimulationType;
}
export interface QueryMsg_SimulateBatchProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateBatch";
  value: Uint8Array;
}
/** QueryMsg_SimulateBatch represents a simulation query for a batch operation. */
export interface QueryMsg_SimulateBatchAmino {
  operations?: OperationAmino[];
  amounts?: CoinAmino[];
  simulation_type?: SimulationType;
}
export interface QueryMsg_SimulateBatchAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_SimulateBatch";
  value: QueryMsg_SimulateBatchAmino;
}
/** QueryMsg_SimulateBatch represents a simulation query for a batch operation. */
export interface QueryMsg_SimulateBatchSDKType {
  operations: OperationSDKType[];
  amounts: CoinSDKType[];
  simulation_type: SimulationType;
}
/** StakeContractsResponse holds a list of stake contracts and an optional next key. */
export interface StakeContractsResponse {
  contracts: StakeContract[];
  nextKey: string;
}
export interface StakeContractsResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContractsResponse";
  value: Uint8Array;
}
/** StakeContractsResponse holds a list of stake contracts and an optional next key. */
export interface StakeContractsResponseAmino {
  contracts?: StakeContractAmino[];
  next_key?: string;
}
export interface StakeContractsResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakeContractsResponse";
  value: StakeContractsResponseAmino;
}
/** StakeContractsResponse holds a list of stake contracts and an optional next key. */
export interface StakeContractsResponseSDKType {
  contracts: StakeContractSDKType[];
  next_key: string;
}
/** ZeroImpactJoinAssetToYammResponse represents the response for a zero-impact join to Yamm. */
export interface ZeroImpactJoinAssetToYammResponse {
  refractFee: Coin;
  stakeCAsset: Coin;
  stakeFee: Coin;
  yAmountsOut: Coin[];
  yammLpt: Coin;
  yammProtocolFee: Coin[];
  yammSwapFee: Coin[];
  baseAmountIn: Coin;
}
export interface ZeroImpactJoinAssetToYammResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToYammResponse";
  value: Uint8Array;
}
/** ZeroImpactJoinAssetToYammResponse represents the response for a zero-impact join to Yamm. */
export interface ZeroImpactJoinAssetToYammResponseAmino {
  refract_fee?: CoinAmino;
  stake_c_asset?: CoinAmino;
  stake_fee?: CoinAmino;
  y_amounts_out?: CoinAmino[];
  yamm_lpt?: CoinAmino;
  yamm_protocol_fee?: CoinAmino[];
  yamm_swap_fee?: CoinAmino[];
  base_amount_in?: CoinAmino;
}
export interface ZeroImpactJoinAssetToYammResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToYammResponse";
  value: ZeroImpactJoinAssetToYammResponseAmino;
}
/** ZeroImpactJoinAssetToYammResponse represents the response for a zero-impact join to Yamm. */
export interface ZeroImpactJoinAssetToYammResponseSDKType {
  refract_fee: CoinSDKType;
  stake_c_asset: CoinSDKType;
  stake_fee: CoinSDKType;
  y_amounts_out: CoinSDKType[];
  yamm_lpt: CoinSDKType;
  yamm_protocol_fee: CoinSDKType[];
  yamm_swap_fee: CoinSDKType[];
  base_amount_in: CoinSDKType;
}
/** ExecuteMsg_ZeroImpactJoinAssetToNested command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToNested {
  poolId: string;
  stakingMethod: StakingMethod;
  minLptOut: string;
}
export interface ExecuteMsg_ZeroImpactJoinAssetToNestedProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToNested";
  value: Uint8Array;
}
/** ExecuteMsg_ZeroImpactJoinAssetToNested command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToNestedAmino {
  pool_id?: string;
  staking_method?: StakingMethodAmino;
  min_lpt_out?: string;
}
export interface ExecuteMsg_ZeroImpactJoinAssetToNestedAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToNested";
  value: ExecuteMsg_ZeroImpactJoinAssetToNestedAmino;
}
/** ExecuteMsg_ZeroImpactJoinAssetToNested command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToNestedSDKType {
  pool_id: string;
  staking_method: StakingMethodSDKType;
  min_lpt_out: string;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToNested command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToNested {
  amountIn: Coin;
  poolId: string;
  stakingMethod: StakingMethod;
}
export interface QueryMsg_SimulateZeroImpactJoinAssetToNestedProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToNested";
  value: Uint8Array;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToNested command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino {
  amount_in?: CoinAmino;
  pool_id?: string;
  staking_method?: StakingMethodAmino;
}
export interface QueryMsg_SimulateZeroImpactJoinAssetToNestedAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToNested";
  value: QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToNested command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToNestedSDKType {
  amount_in: CoinSDKType;
  pool_id: string;
  staking_method: StakingMethodSDKType;
}
/** PageRequest_for_String is used for paginated requests. */
export interface PageRequest_for_String {
  key: string;
  limit: number;
}
export interface PageRequest_for_StringProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.PageRequest_for_String";
  value: Uint8Array;
}
/** PageRequest_for_String is used for paginated requests. */
export interface PageRequest_for_StringAmino {
  key?: string;
  limit?: number;
}
export interface PageRequest_for_StringAminoMsg {
  type: "/pryzmatics.pryzmnexus.PageRequest_for_String";
  value: PageRequest_for_StringAmino;
}
/** PageRequest_for_String is used for paginated requests. */
export interface PageRequest_for_StringSDKType {
  key: string;
  limit: number;
}
/** ExecuteMsg_Batch holds batch operation data. */
export interface ExecuteMsg_Batch {
  minAmountsOut: Coin[];
  operations: Operation[];
}
export interface ExecuteMsg_BatchProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Batch";
  value: Uint8Array;
}
/** ExecuteMsg_Batch holds batch operation data. */
export interface ExecuteMsg_BatchAmino {
  min_amounts_out?: CoinAmino[];
  operations?: OperationAmino[];
}
export interface ExecuteMsg_BatchAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_Batch";
  value: ExecuteMsg_BatchAmino;
}
/** ExecuteMsg_Batch holds batch operation data. */
export interface ExecuteMsg_BatchSDKType {
  min_amounts_out: CoinSDKType[];
  operations: OperationSDKType[];
}
/** ExecuteMsg_Unpause is an empty message. */
export interface ExecuteMsg_Unpause {}
export interface ExecuteMsg_UnpauseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Unpause";
  value: Uint8Array;
}
/** ExecuteMsg_Unpause is an empty message. */
export interface ExecuteMsg_UnpauseAmino {}
export interface ExecuteMsg_UnpauseAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_Unpause";
  value: ExecuteMsg_UnpauseAmino;
}
/** ExecuteMsg_Unpause is an empty message. */
export interface ExecuteMsg_UnpauseSDKType {}
/** ExecuteMsg_ZeroImpactJoinAssetToYamm command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToYamm {
  minLptOut: string;
  stakingMethod: StakingMethod;
}
export interface ExecuteMsg_ZeroImpactJoinAssetToYammProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToYamm";
  value: Uint8Array;
}
/** ExecuteMsg_ZeroImpactJoinAssetToYamm command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToYammAmino {
  min_lpt_out?: string;
  staking_method?: StakingMethodAmino;
}
export interface ExecuteMsg_ZeroImpactJoinAssetToYammAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToYamm";
  value: ExecuteMsg_ZeroImpactJoinAssetToYammAmino;
}
/** ExecuteMsg_ZeroImpactJoinAssetToYamm command. */
export interface ExecuteMsg_ZeroImpactJoinAssetToYammSDKType {
  min_lpt_out: string;
  staking_method: StakingMethodSDKType;
}
/** PausedResponse shows whether the contract is paused. */
export interface PausedResponse {
  paused: boolean;
}
export interface PausedResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.PausedResponse";
  value: Uint8Array;
}
/** PausedResponse shows whether the contract is paused. */
export interface PausedResponseAmino {
  paused?: boolean;
}
export interface PausedResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.PausedResponse";
  value: PausedResponseAmino;
}
/** PausedResponse shows whether the contract is paused. */
export interface PausedResponseSDKType {
  paused: boolean;
}
/** StakeContractResponse holds stake contract data. */
export interface StakeContractResponse {
  contract: StakeContract;
}
export interface StakeContractResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContractResponse";
  value: Uint8Array;
}
/** StakeContractResponse holds stake contract data. */
export interface StakeContractResponseAmino {
  contract?: StakeContractAmino;
}
export interface StakeContractResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakeContractResponse";
  value: StakeContractResponseAmino;
}
/** StakeContractResponse holds stake contract data. */
export interface StakeContractResponseSDKType {
  contract: StakeContractSDKType;
}
/** AdminResponse holds admin data. */
export interface AdminResponse {
  admin: string;
}
export interface AdminResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.AdminResponse";
  value: Uint8Array;
}
/** AdminResponse holds admin data. */
export interface AdminResponseAmino {
  admin?: string;
}
export interface AdminResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.AdminResponse";
  value: AdminResponseAmino;
}
/** AdminResponse holds admin data. */
export interface AdminResponseSDKType {
  admin: string;
}
/** StakeContract holds contract details. */
export interface StakeContract {
  address: string;
  apiType: StakeContractType;
  cDenom: string;
  denom: string;
}
export interface StakeContractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContract";
  value: Uint8Array;
}
/** StakeContract holds contract details. */
export interface StakeContractAmino {
  address?: string;
  api_type?: StakeContractType;
  c_denom?: string;
  denom?: string;
}
export interface StakeContractAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakeContract";
  value: StakeContractAmino;
}
/** StakeContract holds contract details. */
export interface StakeContractSDKType {
  address: string;
  api_type: StakeContractType;
  c_denom: string;
  denom: string;
}
/** Operation contains details for various types of operations. */
export interface Operation {
  batchSwap?: Operation_BatchSwap;
  refract?: Operation_Refract;
  redeem?: Operation_Redeem;
  stake?: Operation_Stake;
}
export interface OperationProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Operation";
  value: Uint8Array;
}
/** Operation contains details for various types of operations. */
export interface OperationAmino {
  batch_swap?: Operation_BatchSwapAmino;
  refract?: Operation_RefractAmino;
  redeem?: Operation_RedeemAmino;
  stake?: Operation_StakeAmino;
}
export interface OperationAminoMsg {
  type: "/pryzmatics.pryzmnexus.Operation";
  value: OperationAmino;
}
/** Operation contains details for various types of operations. */
export interface OperationSDKType {
  batch_swap?: Operation_BatchSwapSDKType;
  refract?: Operation_RefractSDKType;
  redeem?: Operation_RedeemSDKType;
  stake?: Operation_StakeSDKType;
}
export interface ExecutedOperation {
  operation: Operation;
  amountsOut: Coin1[];
  amountsIn: Coin1[];
  fees: Coin1[];
}
export interface ExecutedOperationProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecutedOperation";
  value: Uint8Array;
}
export interface ExecutedOperationAmino {
  operation?: OperationAmino;
  amounts_out?: Coin1Amino[];
  amounts_in?: Coin1Amino[];
  fees?: Coin1Amino[];
}
export interface ExecutedOperationAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecutedOperation";
  value: ExecutedOperationAmino;
}
export interface ExecutedOperationSDKType {
  operation: OperationSDKType;
  amounts_out: Coin1SDKType[];
  amounts_in: Coin1SDKType[];
  fees: Coin1SDKType[];
}
/** QueryMsg_Paused is an empty message. */
export interface QueryMsg_Paused {}
export interface QueryMsg_PausedProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Paused";
  value: Uint8Array;
}
/** QueryMsg_Paused is an empty message. */
export interface QueryMsg_PausedAmino {}
export interface QueryMsg_PausedAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_Paused";
  value: QueryMsg_PausedAmino;
}
/** QueryMsg_Paused is an empty message. */
export interface QueryMsg_PausedSDKType {}
/** ZeroImpactJoinAssetToNestedResponse holds response data for the nested join. */
export interface ZeroImpactJoinAssetToNestedResponse {
  baseAmountToJoin: Coin;
  nestedProtocolFee: Coin[];
  nestedSwapFee: Coin[];
  stakeFee: Coin;
  yAmountsOut: Coin[];
  baseAmountIn: Coin;
  nestedLpt: Coin;
  refractFee: Coin;
  stakeCAsset: Coin;
  yammLpt: Coin;
  yammProtocolFee: Coin[];
  yammSwapFee: Coin[];
}
export interface ZeroImpactJoinAssetToNestedResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToNestedResponse";
  value: Uint8Array;
}
/** ZeroImpactJoinAssetToNestedResponse holds response data for the nested join. */
export interface ZeroImpactJoinAssetToNestedResponseAmino {
  base_amount_to_join?: CoinAmino;
  nested_protocol_fee?: CoinAmino[];
  nested_swap_fee?: CoinAmino[];
  stake_fee?: CoinAmino;
  y_amounts_out?: CoinAmino[];
  base_amount_in?: CoinAmino;
  nested_lpt?: CoinAmino;
  refract_fee?: CoinAmino;
  stake_c_asset?: CoinAmino;
  yamm_lpt?: CoinAmino;
  yamm_protocol_fee?: CoinAmino[];
  yamm_swap_fee?: CoinAmino[];
}
export interface ZeroImpactJoinAssetToNestedResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToNestedResponse";
  value: ZeroImpactJoinAssetToNestedResponseAmino;
}
/** ZeroImpactJoinAssetToNestedResponse holds response data for the nested join. */
export interface ZeroImpactJoinAssetToNestedResponseSDKType {
  base_amount_to_join: CoinSDKType;
  nested_protocol_fee: CoinSDKType[];
  nested_swap_fee: CoinSDKType[];
  stake_fee: CoinSDKType;
  y_amounts_out: CoinSDKType[];
  base_amount_in: CoinSDKType;
  nested_lpt: CoinSDKType;
  refract_fee: CoinSDKType;
  stake_c_asset: CoinSDKType;
  yamm_lpt: CoinSDKType;
  yamm_protocol_fee: CoinSDKType[];
  yamm_swap_fee: CoinSDKType[];
}
/** ExecuteMsg_SetStakeContract command. */
export interface ExecuteMsg_SetStakeContract {
  contract: StakeContract;
}
export interface ExecuteMsg_SetStakeContractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_SetStakeContract";
  value: Uint8Array;
}
/** ExecuteMsg_SetStakeContract command. */
export interface ExecuteMsg_SetStakeContractAmino {
  contract?: StakeContractAmino;
}
export interface ExecuteMsg_SetStakeContractAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_SetStakeContract";
  value: ExecuteMsg_SetStakeContractAmino;
}
/** ExecuteMsg_SetStakeContract command. */
export interface ExecuteMsg_SetStakeContractSDKType {
  contract: StakeContractSDKType;
}
/** BatchSwapStep represents a step in a batch swap operation. */
export interface BatchSwapStep {
  tokenOut: string;
  poolId: bigint;
  tokenIn: string;
}
export interface BatchSwapStepProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.BatchSwapStep";
  value: Uint8Array;
}
/** BatchSwapStep represents a step in a batch swap operation. */
export interface BatchSwapStepAmino {
  token_out?: string;
  pool_id?: string;
  token_in?: string;
}
export interface BatchSwapStepAminoMsg {
  type: "/pryzmatics.pryzmnexus.BatchSwapStep";
  value: BatchSwapStepAmino;
}
/** BatchSwapStep represents a step in a batch swap operation. */
export interface BatchSwapStepSDKType {
  token_out: string;
  pool_id: bigint;
  token_in: string;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToYamm command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToYamm {
  amountIn: Coin;
  stakingMethod: StakingMethod;
}
export interface QueryMsg_SimulateZeroImpactJoinAssetToYammProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToYamm";
  value: Uint8Array;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToYamm command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToYammAmino {
  amount_in?: CoinAmino;
  staking_method?: StakingMethodAmino;
}
export interface QueryMsg_SimulateZeroImpactJoinAssetToYammAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToYamm";
  value: QueryMsg_SimulateZeroImpactJoinAssetToYammAmino;
}
/** QueryMsg_SimulateZeroImpactJoinAssetToYamm command. */
export interface QueryMsg_SimulateZeroImpactJoinAssetToYammSDKType {
  amount_in: CoinSDKType;
  staking_method: StakingMethodSDKType;
}
/** QueryMsg_StakeContracts holds the request data for stake contracts. */
export interface QueryMsg_StakeContracts {
  pageRequest?: PageRequest_for_String;
}
export interface QueryMsg_StakeContractsProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContracts";
  value: Uint8Array;
}
/** QueryMsg_StakeContracts holds the request data for stake contracts. */
export interface QueryMsg_StakeContractsAmino {
  page_request?: PageRequest_for_StringAmino;
}
export interface QueryMsg_StakeContractsAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_StakeContracts";
  value: QueryMsg_StakeContractsAmino;
}
/** QueryMsg_StakeContracts holds the request data for stake contracts. */
export interface QueryMsg_StakeContractsSDKType {
  page_request?: PageRequest_for_StringSDKType;
}
/** BatchResponse holds batch response data. */
export interface BatchResponse {
  amountsOut: Coin[];
  amountsIn: Coin[];
  fees: Coin[];
}
export interface BatchResponseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.BatchResponse";
  value: Uint8Array;
}
/** BatchResponse holds batch response data. */
export interface BatchResponseAmino {
  amounts_out?: CoinAmino[];
  amounts_in?: CoinAmino[];
  fees?: CoinAmino[];
}
export interface BatchResponseAminoMsg {
  type: "/pryzmatics.pryzmnexus.BatchResponse";
  value: BatchResponseAmino;
}
/** BatchResponse holds batch response data. */
export interface BatchResponseSDKType {
  amounts_out: CoinSDKType[];
  amounts_in: CoinSDKType[];
  fees: CoinSDKType[];
}
/** ExecuteMsg_Pause is an empty message. */
export interface ExecuteMsg_Pause {}
export interface ExecuteMsg_PauseProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Pause";
  value: Uint8Array;
}
/** ExecuteMsg_Pause is an empty message. */
export interface ExecuteMsg_PauseAmino {}
export interface ExecuteMsg_PauseAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_Pause";
  value: ExecuteMsg_PauseAmino;
}
/** ExecuteMsg_Pause is an empty message. */
export interface ExecuteMsg_PauseSDKType {}
/** ExecuteMsg_UpdateAdmin command. */
export interface ExecuteMsg_UpdateAdmin {
  address: string;
}
export interface ExecuteMsg_UpdateAdminProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_UpdateAdmin";
  value: Uint8Array;
}
/** ExecuteMsg_UpdateAdmin command. */
export interface ExecuteMsg_UpdateAdminAmino {
  address?: string;
}
export interface ExecuteMsg_UpdateAdminAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_UpdateAdmin";
  value: ExecuteMsg_UpdateAdminAmino;
}
/** ExecuteMsg_UpdateAdmin command. */
export interface ExecuteMsg_UpdateAdminSDKType {
  address: string;
}
/** StakingMethod contains the methods for staking. */
export interface StakingMethod {
  icStaking?: StakingMethod_IcStaking;
  contract?: StakingMethod_Contract;
}
export interface StakingMethodProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod";
  value: Uint8Array;
}
/** StakingMethod contains the methods for staking. */
export interface StakingMethodAmino {
  ic_staking?: StakingMethod_IcStakingAmino;
  contract?: StakingMethod_ContractAmino;
}
export interface StakingMethodAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakingMethod";
  value: StakingMethodAmino;
}
/** StakingMethod contains the methods for staking. */
export interface StakingMethodSDKType {
  ic_staking?: StakingMethod_IcStakingSDKType;
  contract?: StakingMethod_ContractSDKType;
}
/** QueryMsg_StakeContract command. */
export interface QueryMsg_StakeContract {
  denom: string;
}
export interface QueryMsg_StakeContractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContract";
  value: Uint8Array;
}
/** QueryMsg_StakeContract command. */
export interface QueryMsg_StakeContractAmino {
  denom?: string;
}
export interface QueryMsg_StakeContractAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_StakeContract";
  value: QueryMsg_StakeContractAmino;
}
/** QueryMsg_StakeContract command. */
export interface QueryMsg_StakeContractSDKType {
  denom: string;
}
/** QueryMsg_Admin is an empty message. */
export interface QueryMsg_Admin {}
export interface QueryMsg_AdminProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Admin";
  value: Uint8Array;
}
/** QueryMsg_Admin is an empty message. */
export interface QueryMsg_AdminAmino {}
export interface QueryMsg_AdminAminoMsg {
  type: "/pryzmatics.pryzmnexus.QueryMsg_Admin";
  value: QueryMsg_AdminAmino;
}
/** QueryMsg_Admin is an empty message. */
export interface QueryMsg_AdminSDKType {}
/** ExecuteMsg_RemoveStakeContract command. */
export interface ExecuteMsg_RemoveStakeContract {
  denom: string;
}
export interface ExecuteMsg_RemoveStakeContractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_RemoveStakeContract";
  value: Uint8Array;
}
/** ExecuteMsg_RemoveStakeContract command. */
export interface ExecuteMsg_RemoveStakeContractAmino {
  denom?: string;
}
export interface ExecuteMsg_RemoveStakeContractAminoMsg {
  type: "/pryzmatics.pryzmnexus.ExecuteMsg_RemoveStakeContract";
  value: ExecuteMsg_RemoveStakeContractAmino;
}
/** ExecuteMsg_RemoveStakeContract command. */
export interface ExecuteMsg_RemoveStakeContractSDKType {
  denom: string;
}
/** Operation_BatchSwap contains batch swap steps. */
export interface Operation_BatchSwap {
  steps: BatchSwapStep[];
}
export interface Operation_BatchSwapProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_BatchSwap";
  value: Uint8Array;
}
/** Operation_BatchSwap contains batch swap steps. */
export interface Operation_BatchSwapAmino {
  steps?: BatchSwapStepAmino[];
}
export interface Operation_BatchSwapAminoMsg {
  type: "/pryzmatics.pryzmnexus.Operation_BatchSwap";
  value: Operation_BatchSwapAmino;
}
/** Operation_BatchSwap contains batch swap steps. */
export interface Operation_BatchSwapSDKType {
  steps: BatchSwapStepSDKType[];
}
/** Operation_Refract represents a refract operation. */
export interface Operation_Refract {
  maturitySymbol: string;
  tokenIn: string;
}
export interface Operation_RefractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Refract";
  value: Uint8Array;
}
/** Operation_Refract represents a refract operation. */
export interface Operation_RefractAmino {
  maturity_symbol?: string;
  token_in?: string;
}
export interface Operation_RefractAminoMsg {
  type: "/pryzmatics.pryzmnexus.Operation_Refract";
  value: Operation_RefractAmino;
}
/** Operation_Refract represents a refract operation. */
export interface Operation_RefractSDKType {
  maturity_symbol: string;
  token_in: string;
}
/** Operation_Redeem represents a redeem operation. */
export interface Operation_Redeem {
  pAssetDenom: string;
  /** FIXME should be nullable */
  yAssetDenom: string;
}
export interface Operation_RedeemProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Redeem";
  value: Uint8Array;
}
/** Operation_Redeem represents a redeem operation. */
export interface Operation_RedeemAmino {
  p_asset_denom?: string;
  /** FIXME should be nullable */
  y_asset_denom?: string;
}
export interface Operation_RedeemAminoMsg {
  type: "/pryzmatics.pryzmnexus.Operation_Redeem";
  value: Operation_RedeemAmino;
}
/** Operation_Redeem represents a redeem operation. */
export interface Operation_RedeemSDKType {
  p_asset_denom: string;
  y_asset_denom: string;
}
/** Operation_Stake represents a stake operation. */
export interface Operation_Stake {
  stakingMethod: StakingMethod;
  tokenIn: string;
}
export interface Operation_StakeProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Stake";
  value: Uint8Array;
}
/** Operation_Stake represents a stake operation. */
export interface Operation_StakeAmino {
  staking_method?: StakingMethodAmino;
  token_in?: string;
}
export interface Operation_StakeAminoMsg {
  type: "/pryzmatics.pryzmnexus.Operation_Stake";
  value: Operation_StakeAmino;
}
/** Operation_Stake represents a stake operation. */
export interface Operation_StakeSDKType {
  staking_method: StakingMethodSDKType;
  token_in: string;
}
/** StakingMethod_IcStaking defines fields for inter-chain staking. */
export interface StakingMethod_IcStaking {
  transferChannel: string;
  hostChainId: string;
}
export interface StakingMethod_IcStakingProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_IcStaking";
  value: Uint8Array;
}
/** StakingMethod_IcStaking defines fields for inter-chain staking. */
export interface StakingMethod_IcStakingAmino {
  transfer_channel?: string;
  host_chain_id?: string;
}
export interface StakingMethod_IcStakingAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakingMethod_IcStaking";
  value: StakingMethod_IcStakingAmino;
}
/** StakingMethod_IcStaking defines fields for inter-chain staking. */
export interface StakingMethod_IcStakingSDKType {
  transfer_channel: string;
  host_chain_id: string;
}
/** StakingMethod_Contract is an empty message for contract staking. */
export interface StakingMethod_Contract {}
export interface StakingMethod_ContractProtoMsg {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_Contract";
  value: Uint8Array;
}
/** StakingMethod_Contract is an empty message for contract staking. */
export interface StakingMethod_ContractAmino {}
export interface StakingMethod_ContractAminoMsg {
  type: "/pryzmatics.pryzmnexus.StakingMethod_Contract";
  value: StakingMethod_ContractAmino;
}
/** StakingMethod_Contract is an empty message for contract staking. */
export interface StakingMethod_ContractSDKType {}
function createBaseCoin(): Coin {
  return {
    amount: "",
    denom: ""
  };
}
export const Coin = {
  typeUrl: "/pryzmatics.pryzmnexus.Coin",
  is(o: any): o is Coin {
    return o && (o.$typeUrl === Coin.typeUrl || typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is CoinSDKType {
    return o && (o.$typeUrl === Coin.typeUrl || typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is CoinAmino {
    return o && (o.$typeUrl === Coin.typeUrl || typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: Coin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Coin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Coin {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<Coin>): Coin {
    const message = createBaseCoin();
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: CoinAmino): Coin {
    const message = createBaseCoin();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: Coin, useInterfaces: boolean = true): CoinAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: CoinAminoMsg): Coin {
    return Coin.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinProtoMsg, useInterfaces: boolean = true): Coin {
    return Coin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Coin): Uint8Array {
    return Coin.encode(message).finish();
  },
  toProtoMsg(message: Coin): CoinProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Coin",
      value: Coin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Coin.typeUrl, Coin);
function createBaseInstantiateMsg(): InstantiateMsg {
  return {};
}
export const InstantiateMsg = {
  typeUrl: "/pryzmatics.pryzmnexus.InstantiateMsg",
  is(o: any): o is InstantiateMsg {
    return o && o.$typeUrl === InstantiateMsg.typeUrl;
  },
  isSDK(o: any): o is InstantiateMsgSDKType {
    return o && o.$typeUrl === InstantiateMsg.typeUrl;
  },
  isAmino(o: any): o is InstantiateMsgAmino {
    return o && o.$typeUrl === InstantiateMsg.typeUrl;
  },
  encode(_: InstantiateMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): InstantiateMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): InstantiateMsg {
    return {};
  },
  toJSON(_: InstantiateMsg): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<InstantiateMsg>): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    return message;
  },
  fromAmino(_: InstantiateMsgAmino): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    return message;
  },
  toAmino(_: InstantiateMsg, useInterfaces: boolean = true): InstantiateMsgAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: InstantiateMsgAminoMsg): InstantiateMsg {
    return InstantiateMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: InstantiateMsgProtoMsg, useInterfaces: boolean = true): InstantiateMsg {
    return InstantiateMsg.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: InstantiateMsg): Uint8Array {
    return InstantiateMsg.encode(message).finish();
  },
  toProtoMsg(message: InstantiateMsg): InstantiateMsgProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.InstantiateMsg",
      value: InstantiateMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InstantiateMsg.typeUrl, InstantiateMsg);
function createBaseExecuteMsg(): ExecuteMsg {
  return {
    zeroImpactJoinAssetToNested: undefined,
    zeroImpactJoinAssetToYamm: undefined,
    batch: undefined,
    setStakeContract: undefined,
    removeStakeContract: undefined,
    pause: undefined,
    unpause: undefined,
    updateAdmin: undefined
  };
}
export const ExecuteMsg = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg",
  is(o: any): o is ExecuteMsg {
    return o && o.$typeUrl === ExecuteMsg.typeUrl;
  },
  isSDK(o: any): o is ExecuteMsgSDKType {
    return o && o.$typeUrl === ExecuteMsg.typeUrl;
  },
  isAmino(o: any): o is ExecuteMsgAmino {
    return o && o.$typeUrl === ExecuteMsg.typeUrl;
  },
  encode(message: ExecuteMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.zeroImpactJoinAssetToNested !== undefined) {
      ExecuteMsg_ZeroImpactJoinAssetToNested.encode(message.zeroImpactJoinAssetToNested, writer.uint32(10).fork()).ldelim();
    }
    if (message.zeroImpactJoinAssetToYamm !== undefined) {
      ExecuteMsg_ZeroImpactJoinAssetToYamm.encode(message.zeroImpactJoinAssetToYamm, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      ExecuteMsg_Batch.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.setStakeContract !== undefined) {
      ExecuteMsg_SetStakeContract.encode(message.setStakeContract, writer.uint32(34).fork()).ldelim();
    }
    if (message.removeStakeContract !== undefined) {
      ExecuteMsg_RemoveStakeContract.encode(message.removeStakeContract, writer.uint32(42).fork()).ldelim();
    }
    if (message.pause !== undefined) {
      ExecuteMsg_Pause.encode(message.pause, writer.uint32(50).fork()).ldelim();
    }
    if (message.unpause !== undefined) {
      ExecuteMsg_Unpause.encode(message.unpause, writer.uint32(58).fork()).ldelim();
    }
    if (message.updateAdmin !== undefined) {
      ExecuteMsg_UpdateAdmin.encode(message.updateAdmin, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zeroImpactJoinAssetToNested = ExecuteMsg_ZeroImpactJoinAssetToNested.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.zeroImpactJoinAssetToYamm = ExecuteMsg_ZeroImpactJoinAssetToYamm.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.batch = ExecuteMsg_Batch.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.setStakeContract = ExecuteMsg_SetStakeContract.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.removeStakeContract = ExecuteMsg_RemoveStakeContract.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.pause = ExecuteMsg_Pause.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.unpause = ExecuteMsg_Unpause.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.updateAdmin = ExecuteMsg_UpdateAdmin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg {
    return {
      zeroImpactJoinAssetToNested: isSet(object.zeroImpactJoinAssetToNested) ? ExecuteMsg_ZeroImpactJoinAssetToNested.fromJSON(object.zeroImpactJoinAssetToNested) : undefined,
      zeroImpactJoinAssetToYamm: isSet(object.zeroImpactJoinAssetToYamm) ? ExecuteMsg_ZeroImpactJoinAssetToYamm.fromJSON(object.zeroImpactJoinAssetToYamm) : undefined,
      batch: isSet(object.batch) ? ExecuteMsg_Batch.fromJSON(object.batch) : undefined,
      setStakeContract: isSet(object.setStakeContract) ? ExecuteMsg_SetStakeContract.fromJSON(object.setStakeContract) : undefined,
      removeStakeContract: isSet(object.removeStakeContract) ? ExecuteMsg_RemoveStakeContract.fromJSON(object.removeStakeContract) : undefined,
      pause: isSet(object.pause) ? ExecuteMsg_Pause.fromJSON(object.pause) : undefined,
      unpause: isSet(object.unpause) ? ExecuteMsg_Unpause.fromJSON(object.unpause) : undefined,
      updateAdmin: isSet(object.updateAdmin) ? ExecuteMsg_UpdateAdmin.fromJSON(object.updateAdmin) : undefined
    };
  },
  toJSON(message: ExecuteMsg): unknown {
    const obj: any = {};
    message.zeroImpactJoinAssetToNested !== undefined && (obj.zeroImpactJoinAssetToNested = message.zeroImpactJoinAssetToNested ? ExecuteMsg_ZeroImpactJoinAssetToNested.toJSON(message.zeroImpactJoinAssetToNested) : undefined);
    message.zeroImpactJoinAssetToYamm !== undefined && (obj.zeroImpactJoinAssetToYamm = message.zeroImpactJoinAssetToYamm ? ExecuteMsg_ZeroImpactJoinAssetToYamm.toJSON(message.zeroImpactJoinAssetToYamm) : undefined);
    message.batch !== undefined && (obj.batch = message.batch ? ExecuteMsg_Batch.toJSON(message.batch) : undefined);
    message.setStakeContract !== undefined && (obj.setStakeContract = message.setStakeContract ? ExecuteMsg_SetStakeContract.toJSON(message.setStakeContract) : undefined);
    message.removeStakeContract !== undefined && (obj.removeStakeContract = message.removeStakeContract ? ExecuteMsg_RemoveStakeContract.toJSON(message.removeStakeContract) : undefined);
    message.pause !== undefined && (obj.pause = message.pause ? ExecuteMsg_Pause.toJSON(message.pause) : undefined);
    message.unpause !== undefined && (obj.unpause = message.unpause ? ExecuteMsg_Unpause.toJSON(message.unpause) : undefined);
    message.updateAdmin !== undefined && (obj.updateAdmin = message.updateAdmin ? ExecuteMsg_UpdateAdmin.toJSON(message.updateAdmin) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg>): ExecuteMsg {
    const message = createBaseExecuteMsg();
    message.zeroImpactJoinAssetToNested = object.zeroImpactJoinAssetToNested !== undefined && object.zeroImpactJoinAssetToNested !== null ? ExecuteMsg_ZeroImpactJoinAssetToNested.fromPartial(object.zeroImpactJoinAssetToNested) : undefined;
    message.zeroImpactJoinAssetToYamm = object.zeroImpactJoinAssetToYamm !== undefined && object.zeroImpactJoinAssetToYamm !== null ? ExecuteMsg_ZeroImpactJoinAssetToYamm.fromPartial(object.zeroImpactJoinAssetToYamm) : undefined;
    message.batch = object.batch !== undefined && object.batch !== null ? ExecuteMsg_Batch.fromPartial(object.batch) : undefined;
    message.setStakeContract = object.setStakeContract !== undefined && object.setStakeContract !== null ? ExecuteMsg_SetStakeContract.fromPartial(object.setStakeContract) : undefined;
    message.removeStakeContract = object.removeStakeContract !== undefined && object.removeStakeContract !== null ? ExecuteMsg_RemoveStakeContract.fromPartial(object.removeStakeContract) : undefined;
    message.pause = object.pause !== undefined && object.pause !== null ? ExecuteMsg_Pause.fromPartial(object.pause) : undefined;
    message.unpause = object.unpause !== undefined && object.unpause !== null ? ExecuteMsg_Unpause.fromPartial(object.unpause) : undefined;
    message.updateAdmin = object.updateAdmin !== undefined && object.updateAdmin !== null ? ExecuteMsg_UpdateAdmin.fromPartial(object.updateAdmin) : undefined;
    return message;
  },
  fromAmino(object: ExecuteMsgAmino): ExecuteMsg {
    const message = createBaseExecuteMsg();
    if (object.zero_impact_join_asset_to_nested !== undefined && object.zero_impact_join_asset_to_nested !== null) {
      message.zeroImpactJoinAssetToNested = ExecuteMsg_ZeroImpactJoinAssetToNested.fromAmino(object.zero_impact_join_asset_to_nested);
    }
    if (object.zero_impact_join_asset_to_yamm !== undefined && object.zero_impact_join_asset_to_yamm !== null) {
      message.zeroImpactJoinAssetToYamm = ExecuteMsg_ZeroImpactJoinAssetToYamm.fromAmino(object.zero_impact_join_asset_to_yamm);
    }
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = ExecuteMsg_Batch.fromAmino(object.batch);
    }
    if (object.set_stake_contract !== undefined && object.set_stake_contract !== null) {
      message.setStakeContract = ExecuteMsg_SetStakeContract.fromAmino(object.set_stake_contract);
    }
    if (object.remove_stake_contract !== undefined && object.remove_stake_contract !== null) {
      message.removeStakeContract = ExecuteMsg_RemoveStakeContract.fromAmino(object.remove_stake_contract);
    }
    if (object.pause !== undefined && object.pause !== null) {
      message.pause = ExecuteMsg_Pause.fromAmino(object.pause);
    }
    if (object.unpause !== undefined && object.unpause !== null) {
      message.unpause = ExecuteMsg_Unpause.fromAmino(object.unpause);
    }
    if (object.update_admin !== undefined && object.update_admin !== null) {
      message.updateAdmin = ExecuteMsg_UpdateAdmin.fromAmino(object.update_admin);
    }
    return message;
  },
  toAmino(message: ExecuteMsg, useInterfaces: boolean = true): ExecuteMsgAmino {
    const obj: any = {};
    obj.zero_impact_join_asset_to_nested = message.zeroImpactJoinAssetToNested ? ExecuteMsg_ZeroImpactJoinAssetToNested.toAmino(message.zeroImpactJoinAssetToNested, useInterfaces) : undefined;
    obj.zero_impact_join_asset_to_yamm = message.zeroImpactJoinAssetToYamm ? ExecuteMsg_ZeroImpactJoinAssetToYamm.toAmino(message.zeroImpactJoinAssetToYamm, useInterfaces) : undefined;
    obj.batch = message.batch ? ExecuteMsg_Batch.toAmino(message.batch, useInterfaces) : undefined;
    obj.set_stake_contract = message.setStakeContract ? ExecuteMsg_SetStakeContract.toAmino(message.setStakeContract, useInterfaces) : undefined;
    obj.remove_stake_contract = message.removeStakeContract ? ExecuteMsg_RemoveStakeContract.toAmino(message.removeStakeContract, useInterfaces) : undefined;
    obj.pause = message.pause ? ExecuteMsg_Pause.toAmino(message.pause, useInterfaces) : undefined;
    obj.unpause = message.unpause ? ExecuteMsg_Unpause.toAmino(message.unpause, useInterfaces) : undefined;
    obj.update_admin = message.updateAdmin ? ExecuteMsg_UpdateAdmin.toAmino(message.updateAdmin, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsgAminoMsg): ExecuteMsg {
    return ExecuteMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsgProtoMsg, useInterfaces: boolean = true): ExecuteMsg {
    return ExecuteMsg.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg): Uint8Array {
    return ExecuteMsg.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg): ExecuteMsgProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg",
      value: ExecuteMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg.typeUrl, ExecuteMsg);
function createBaseMigrateMsg(): MigrateMsg {
  return {};
}
export const MigrateMsg = {
  typeUrl: "/pryzmatics.pryzmnexus.MigrateMsg",
  is(o: any): o is MigrateMsg {
    return o && o.$typeUrl === MigrateMsg.typeUrl;
  },
  isSDK(o: any): o is MigrateMsgSDKType {
    return o && o.$typeUrl === MigrateMsg.typeUrl;
  },
  isAmino(o: any): o is MigrateMsgAmino {
    return o && o.$typeUrl === MigrateMsg.typeUrl;
  },
  encode(_: MigrateMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MigrateMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MigrateMsg {
    return {};
  },
  toJSON(_: MigrateMsg): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MigrateMsg>): MigrateMsg {
    const message = createBaseMigrateMsg();
    return message;
  },
  fromAmino(_: MigrateMsgAmino): MigrateMsg {
    const message = createBaseMigrateMsg();
    return message;
  },
  toAmino(_: MigrateMsg, useInterfaces: boolean = true): MigrateMsgAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MigrateMsgAminoMsg): MigrateMsg {
    return MigrateMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: MigrateMsgProtoMsg, useInterfaces: boolean = true): MigrateMsg {
    return MigrateMsg.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MigrateMsg): Uint8Array {
    return MigrateMsg.encode(message).finish();
  },
  toProtoMsg(message: MigrateMsg): MigrateMsgProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.MigrateMsg",
      value: MigrateMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MigrateMsg.typeUrl, MigrateMsg);
function createBaseQueryMsg(): QueryMsg {
  return {
    simulateZeroImpactJoinAssetToNested: undefined,
    simulateZeroImpactJoinAssetToYamm: undefined,
    simulateBatch: undefined,
    stakeContracts: undefined,
    stakeContract: undefined,
    paused: undefined,
    admin: undefined
  };
}
export const QueryMsg = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg",
  is(o: any): o is QueryMsg {
    return o && o.$typeUrl === QueryMsg.typeUrl;
  },
  isSDK(o: any): o is QueryMsgSDKType {
    return o && o.$typeUrl === QueryMsg.typeUrl;
  },
  isAmino(o: any): o is QueryMsgAmino {
    return o && o.$typeUrl === QueryMsg.typeUrl;
  },
  encode(message: QueryMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.simulateZeroImpactJoinAssetToNested !== undefined) {
      QueryMsg_SimulateZeroImpactJoinAssetToNested.encode(message.simulateZeroImpactJoinAssetToNested, writer.uint32(10).fork()).ldelim();
    }
    if (message.simulateZeroImpactJoinAssetToYamm !== undefined) {
      QueryMsg_SimulateZeroImpactJoinAssetToYamm.encode(message.simulateZeroImpactJoinAssetToYamm, writer.uint32(18).fork()).ldelim();
    }
    if (message.simulateBatch !== undefined) {
      QueryMsg_SimulateBatch.encode(message.simulateBatch, writer.uint32(26).fork()).ldelim();
    }
    if (message.stakeContracts !== undefined) {
      QueryMsg_StakeContracts.encode(message.stakeContracts, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakeContract !== undefined) {
      QueryMsg_StakeContract.encode(message.stakeContract, writer.uint32(42).fork()).ldelim();
    }
    if (message.paused !== undefined) {
      QueryMsg_Paused.encode(message.paused, writer.uint32(50).fork()).ldelim();
    }
    if (message.admin !== undefined) {
      QueryMsg_Admin.encode(message.admin, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.simulateZeroImpactJoinAssetToNested = QueryMsg_SimulateZeroImpactJoinAssetToNested.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.simulateZeroImpactJoinAssetToYamm = QueryMsg_SimulateZeroImpactJoinAssetToYamm.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.simulateBatch = QueryMsg_SimulateBatch.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.stakeContracts = QueryMsg_StakeContracts.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.stakeContract = QueryMsg_StakeContract.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.paused = QueryMsg_Paused.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.admin = QueryMsg_Admin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg {
    return {
      simulateZeroImpactJoinAssetToNested: isSet(object.simulateZeroImpactJoinAssetToNested) ? QueryMsg_SimulateZeroImpactJoinAssetToNested.fromJSON(object.simulateZeroImpactJoinAssetToNested) : undefined,
      simulateZeroImpactJoinAssetToYamm: isSet(object.simulateZeroImpactJoinAssetToYamm) ? QueryMsg_SimulateZeroImpactJoinAssetToYamm.fromJSON(object.simulateZeroImpactJoinAssetToYamm) : undefined,
      simulateBatch: isSet(object.simulateBatch) ? QueryMsg_SimulateBatch.fromJSON(object.simulateBatch) : undefined,
      stakeContracts: isSet(object.stakeContracts) ? QueryMsg_StakeContracts.fromJSON(object.stakeContracts) : undefined,
      stakeContract: isSet(object.stakeContract) ? QueryMsg_StakeContract.fromJSON(object.stakeContract) : undefined,
      paused: isSet(object.paused) ? QueryMsg_Paused.fromJSON(object.paused) : undefined,
      admin: isSet(object.admin) ? QueryMsg_Admin.fromJSON(object.admin) : undefined
    };
  },
  toJSON(message: QueryMsg): unknown {
    const obj: any = {};
    message.simulateZeroImpactJoinAssetToNested !== undefined && (obj.simulateZeroImpactJoinAssetToNested = message.simulateZeroImpactJoinAssetToNested ? QueryMsg_SimulateZeroImpactJoinAssetToNested.toJSON(message.simulateZeroImpactJoinAssetToNested) : undefined);
    message.simulateZeroImpactJoinAssetToYamm !== undefined && (obj.simulateZeroImpactJoinAssetToYamm = message.simulateZeroImpactJoinAssetToYamm ? QueryMsg_SimulateZeroImpactJoinAssetToYamm.toJSON(message.simulateZeroImpactJoinAssetToYamm) : undefined);
    message.simulateBatch !== undefined && (obj.simulateBatch = message.simulateBatch ? QueryMsg_SimulateBatch.toJSON(message.simulateBatch) : undefined);
    message.stakeContracts !== undefined && (obj.stakeContracts = message.stakeContracts ? QueryMsg_StakeContracts.toJSON(message.stakeContracts) : undefined);
    message.stakeContract !== undefined && (obj.stakeContract = message.stakeContract ? QueryMsg_StakeContract.toJSON(message.stakeContract) : undefined);
    message.paused !== undefined && (obj.paused = message.paused ? QueryMsg_Paused.toJSON(message.paused) : undefined);
    message.admin !== undefined && (obj.admin = message.admin ? QueryMsg_Admin.toJSON(message.admin) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMsg>): QueryMsg {
    const message = createBaseQueryMsg();
    message.simulateZeroImpactJoinAssetToNested = object.simulateZeroImpactJoinAssetToNested !== undefined && object.simulateZeroImpactJoinAssetToNested !== null ? QueryMsg_SimulateZeroImpactJoinAssetToNested.fromPartial(object.simulateZeroImpactJoinAssetToNested) : undefined;
    message.simulateZeroImpactJoinAssetToYamm = object.simulateZeroImpactJoinAssetToYamm !== undefined && object.simulateZeroImpactJoinAssetToYamm !== null ? QueryMsg_SimulateZeroImpactJoinAssetToYamm.fromPartial(object.simulateZeroImpactJoinAssetToYamm) : undefined;
    message.simulateBatch = object.simulateBatch !== undefined && object.simulateBatch !== null ? QueryMsg_SimulateBatch.fromPartial(object.simulateBatch) : undefined;
    message.stakeContracts = object.stakeContracts !== undefined && object.stakeContracts !== null ? QueryMsg_StakeContracts.fromPartial(object.stakeContracts) : undefined;
    message.stakeContract = object.stakeContract !== undefined && object.stakeContract !== null ? QueryMsg_StakeContract.fromPartial(object.stakeContract) : undefined;
    message.paused = object.paused !== undefined && object.paused !== null ? QueryMsg_Paused.fromPartial(object.paused) : undefined;
    message.admin = object.admin !== undefined && object.admin !== null ? QueryMsg_Admin.fromPartial(object.admin) : undefined;
    return message;
  },
  fromAmino(object: QueryMsgAmino): QueryMsg {
    const message = createBaseQueryMsg();
    if (object.simulate_zero_impact_join_asset_to_nested !== undefined && object.simulate_zero_impact_join_asset_to_nested !== null) {
      message.simulateZeroImpactJoinAssetToNested = QueryMsg_SimulateZeroImpactJoinAssetToNested.fromAmino(object.simulate_zero_impact_join_asset_to_nested);
    }
    if (object.simulate_zero_impact_join_asset_to_yamm !== undefined && object.simulate_zero_impact_join_asset_to_yamm !== null) {
      message.simulateZeroImpactJoinAssetToYamm = QueryMsg_SimulateZeroImpactJoinAssetToYamm.fromAmino(object.simulate_zero_impact_join_asset_to_yamm);
    }
    if (object.simulate_batch !== undefined && object.simulate_batch !== null) {
      message.simulateBatch = QueryMsg_SimulateBatch.fromAmino(object.simulate_batch);
    }
    if (object.stake_contracts !== undefined && object.stake_contracts !== null) {
      message.stakeContracts = QueryMsg_StakeContracts.fromAmino(object.stake_contracts);
    }
    if (object.stake_contract !== undefined && object.stake_contract !== null) {
      message.stakeContract = QueryMsg_StakeContract.fromAmino(object.stake_contract);
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = QueryMsg_Paused.fromAmino(object.paused);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = QueryMsg_Admin.fromAmino(object.admin);
    }
    return message;
  },
  toAmino(message: QueryMsg, useInterfaces: boolean = true): QueryMsgAmino {
    const obj: any = {};
    obj.simulate_zero_impact_join_asset_to_nested = message.simulateZeroImpactJoinAssetToNested ? QueryMsg_SimulateZeroImpactJoinAssetToNested.toAmino(message.simulateZeroImpactJoinAssetToNested, useInterfaces) : undefined;
    obj.simulate_zero_impact_join_asset_to_yamm = message.simulateZeroImpactJoinAssetToYamm ? QueryMsg_SimulateZeroImpactJoinAssetToYamm.toAmino(message.simulateZeroImpactJoinAssetToYamm, useInterfaces) : undefined;
    obj.simulate_batch = message.simulateBatch ? QueryMsg_SimulateBatch.toAmino(message.simulateBatch, useInterfaces) : undefined;
    obj.stake_contracts = message.stakeContracts ? QueryMsg_StakeContracts.toAmino(message.stakeContracts, useInterfaces) : undefined;
    obj.stake_contract = message.stakeContract ? QueryMsg_StakeContract.toAmino(message.stakeContract, useInterfaces) : undefined;
    obj.paused = message.paused ? QueryMsg_Paused.toAmino(message.paused, useInterfaces) : undefined;
    obj.admin = message.admin ? QueryMsg_Admin.toAmino(message.admin, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsgAminoMsg): QueryMsg {
    return QueryMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsgProtoMsg, useInterfaces: boolean = true): QueryMsg {
    return QueryMsg.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg): Uint8Array {
    return QueryMsg.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg): QueryMsgProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg",
      value: QueryMsg.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg.typeUrl, QueryMsg);
function createBaseQueryMsg_SimulateBatch(): QueryMsg_SimulateBatch {
  return {
    operations: [],
    amounts: [],
    simulationType: 0
  };
}
export const QueryMsg_SimulateBatch = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateBatch",
  is(o: any): o is QueryMsg_SimulateBatch {
    return o && (o.$typeUrl === QueryMsg_SimulateBatch.typeUrl || Array.isArray(o.operations) && (!o.operations.length || Operation.is(o.operations[0])) && Array.isArray(o.amounts) && (!o.amounts.length || Coin.is(o.amounts[0])) && isSet(o.simulationType));
  },
  isSDK(o: any): o is QueryMsg_SimulateBatchSDKType {
    return o && (o.$typeUrl === QueryMsg_SimulateBatch.typeUrl || Array.isArray(o.operations) && (!o.operations.length || Operation.isSDK(o.operations[0])) && Array.isArray(o.amounts) && (!o.amounts.length || Coin.isSDK(o.amounts[0])) && isSet(o.simulation_type));
  },
  isAmino(o: any): o is QueryMsg_SimulateBatchAmino {
    return o && (o.$typeUrl === QueryMsg_SimulateBatch.typeUrl || Array.isArray(o.operations) && (!o.operations.length || Operation.isAmino(o.operations[0])) && Array.isArray(o.amounts) && (!o.amounts.length || Coin.isAmino(o.amounts[0])) && isSet(o.simulation_type));
  },
  encode(message: QueryMsg_SimulateBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.simulationType !== 0) {
      writer.uint32(24).int32(message.simulationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_SimulateBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_SimulateBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.simulationType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg_SimulateBatch {
    return {
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : [],
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : [],
      simulationType: isSet(object.simulationType) ? simulationTypeFromJSON(object.simulationType) : -1
    };
  },
  toJSON(message: QueryMsg_SimulateBatch): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amounts = [];
    }
    message.simulationType !== undefined && (obj.simulationType = simulationTypeToJSON(message.simulationType));
    return obj;
  },
  fromPartial(object: Partial<QueryMsg_SimulateBatch>): QueryMsg_SimulateBatch {
    const message = createBaseQueryMsg_SimulateBatch();
    message.operations = object.operations?.map(e => Operation.fromPartial(e)) || [];
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    message.simulationType = object.simulationType ?? 0;
    return message;
  },
  fromAmino(object: QueryMsg_SimulateBatchAmino): QueryMsg_SimulateBatch {
    const message = createBaseQueryMsg_SimulateBatch();
    message.operations = object.operations?.map(e => Operation.fromAmino(e)) || [];
    message.amounts = object.amounts?.map(e => Coin.fromAmino(e)) || [];
    if (object.simulation_type !== undefined && object.simulation_type !== null) {
      message.simulationType = object.simulation_type;
    }
    return message;
  },
  toAmino(message: QueryMsg_SimulateBatch, useInterfaces: boolean = true): QueryMsg_SimulateBatchAmino {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.operations = message.operations;
    }
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts = message.amounts;
    }
    obj.simulation_type = message.simulationType === 0 ? undefined : message.simulationType;
    return obj;
  },
  fromAminoMsg(object: QueryMsg_SimulateBatchAminoMsg): QueryMsg_SimulateBatch {
    return QueryMsg_SimulateBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_SimulateBatchProtoMsg, useInterfaces: boolean = true): QueryMsg_SimulateBatch {
    return QueryMsg_SimulateBatch.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_SimulateBatch): Uint8Array {
    return QueryMsg_SimulateBatch.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_SimulateBatch): QueryMsg_SimulateBatchProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateBatch",
      value: QueryMsg_SimulateBatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_SimulateBatch.typeUrl, QueryMsg_SimulateBatch);
function createBaseStakeContractsResponse(): StakeContractsResponse {
  return {
    contracts: [],
    nextKey: ""
  };
}
export const StakeContractsResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContractsResponse",
  is(o: any): o is StakeContractsResponse {
    return o && (o.$typeUrl === StakeContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || StakeContract.is(o.contracts[0])) && typeof o.nextKey === "string");
  },
  isSDK(o: any): o is StakeContractsResponseSDKType {
    return o && (o.$typeUrl === StakeContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || StakeContract.isSDK(o.contracts[0])) && typeof o.next_key === "string");
  },
  isAmino(o: any): o is StakeContractsResponseAmino {
    return o && (o.$typeUrl === StakeContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || StakeContract.isAmino(o.contracts[0])) && typeof o.next_key === "string");
  },
  encode(message: StakeContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      StakeContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey !== "") {
      writer.uint32(18).string(message.nextKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakeContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(StakeContract.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.nextKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => StakeContract.fromJSON(e)) : [],
      nextKey: isSet(object.nextKey) ? String(object.nextKey) : ""
    };
  },
  toJSON(message: StakeContractsResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? StakeContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.nextKey !== undefined && (obj.nextKey = message.nextKey);
    return obj;
  },
  fromPartial(object: Partial<StakeContractsResponse>): StakeContractsResponse {
    const message = createBaseStakeContractsResponse();
    message.contracts = object.contracts?.map(e => StakeContract.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? "";
    return message;
  },
  fromAmino(object: StakeContractsResponseAmino): StakeContractsResponse {
    const message = createBaseStakeContractsResponse();
    message.contracts = object.contracts?.map(e => StakeContract.fromAmino(e)) || [];
    if (object.next_key !== undefined && object.next_key !== null) {
      message.nextKey = object.next_key;
    }
    return message;
  },
  toAmino(message: StakeContractsResponse, useInterfaces: boolean = true): StakeContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? StakeContract.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    obj.next_key = message.nextKey === "" ? undefined : message.nextKey;
    return obj;
  },
  fromAminoMsg(object: StakeContractsResponseAminoMsg): StakeContractsResponse {
    return StakeContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeContractsResponseProtoMsg, useInterfaces: boolean = true): StakeContractsResponse {
    return StakeContractsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakeContractsResponse): Uint8Array {
    return StakeContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: StakeContractsResponse): StakeContractsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakeContractsResponse",
      value: StakeContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakeContractsResponse.typeUrl, StakeContractsResponse);
function createBaseZeroImpactJoinAssetToYammResponse(): ZeroImpactJoinAssetToYammResponse {
  return {
    refractFee: Coin.fromPartial({}),
    stakeCAsset: Coin.fromPartial({}),
    stakeFee: Coin.fromPartial({}),
    yAmountsOut: [],
    yammLpt: Coin.fromPartial({}),
    yammProtocolFee: [],
    yammSwapFee: [],
    baseAmountIn: Coin.fromPartial({})
  };
}
export const ZeroImpactJoinAssetToYammResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToYammResponse",
  is(o: any): o is ZeroImpactJoinAssetToYammResponse {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToYammResponse.typeUrl || Coin.is(o.refractFee) && Coin.is(o.stakeCAsset) && Coin.is(o.stakeFee) && Array.isArray(o.yAmountsOut) && (!o.yAmountsOut.length || Coin.is(o.yAmountsOut[0])) && Coin.is(o.yammLpt) && Array.isArray(o.yammProtocolFee) && (!o.yammProtocolFee.length || Coin.is(o.yammProtocolFee[0])) && Array.isArray(o.yammSwapFee) && (!o.yammSwapFee.length || Coin.is(o.yammSwapFee[0])) && Coin.is(o.baseAmountIn));
  },
  isSDK(o: any): o is ZeroImpactJoinAssetToYammResponseSDKType {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToYammResponse.typeUrl || Coin.isSDK(o.refract_fee) && Coin.isSDK(o.stake_c_asset) && Coin.isSDK(o.stake_fee) && Array.isArray(o.y_amounts_out) && (!o.y_amounts_out.length || Coin.isSDK(o.y_amounts_out[0])) && Coin.isSDK(o.yamm_lpt) && Array.isArray(o.yamm_protocol_fee) && (!o.yamm_protocol_fee.length || Coin.isSDK(o.yamm_protocol_fee[0])) && Array.isArray(o.yamm_swap_fee) && (!o.yamm_swap_fee.length || Coin.isSDK(o.yamm_swap_fee[0])) && Coin.isSDK(o.base_amount_in));
  },
  isAmino(o: any): o is ZeroImpactJoinAssetToYammResponseAmino {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToYammResponse.typeUrl || Coin.isAmino(o.refract_fee) && Coin.isAmino(o.stake_c_asset) && Coin.isAmino(o.stake_fee) && Array.isArray(o.y_amounts_out) && (!o.y_amounts_out.length || Coin.isAmino(o.y_amounts_out[0])) && Coin.isAmino(o.yamm_lpt) && Array.isArray(o.yamm_protocol_fee) && (!o.yamm_protocol_fee.length || Coin.isAmino(o.yamm_protocol_fee[0])) && Array.isArray(o.yamm_swap_fee) && (!o.yamm_swap_fee.length || Coin.isAmino(o.yamm_swap_fee[0])) && Coin.isAmino(o.base_amount_in));
  },
  encode(message: ZeroImpactJoinAssetToYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refractFee !== undefined) {
      Coin.encode(message.refractFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakeCAsset !== undefined) {
      Coin.encode(message.stakeCAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.stakeFee !== undefined) {
      Coin.encode(message.stakeFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.yAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.yammLpt !== undefined) {
      Coin.encode(message.yammLpt, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.yammProtocolFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.yammSwapFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.baseAmountIn !== undefined) {
      Coin.encode(message.baseAmountIn, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ZeroImpactJoinAssetToYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroImpactJoinAssetToYammResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refractFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.stakeCAsset = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.stakeFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.yAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.yammLpt = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.yammProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.yammSwapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.baseAmountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ZeroImpactJoinAssetToYammResponse {
    return {
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      stakeCAsset: isSet(object.stakeCAsset) ? Coin.fromJSON(object.stakeCAsset) : undefined,
      stakeFee: isSet(object.stakeFee) ? Coin.fromJSON(object.stakeFee) : undefined,
      yAmountsOut: Array.isArray(object?.yAmountsOut) ? object.yAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      yammLpt: isSet(object.yammLpt) ? Coin.fromJSON(object.yammLpt) : undefined,
      yammProtocolFee: Array.isArray(object?.yammProtocolFee) ? object.yammProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      yammSwapFee: Array.isArray(object?.yammSwapFee) ? object.yammSwapFee.map((e: any) => Coin.fromJSON(e)) : [],
      baseAmountIn: isSet(object.baseAmountIn) ? Coin.fromJSON(object.baseAmountIn) : undefined
    };
  },
  toJSON(message: ZeroImpactJoinAssetToYammResponse): unknown {
    const obj: any = {};
    message.refractFee !== undefined && (obj.refractFee = message.refractFee ? Coin.toJSON(message.refractFee) : undefined);
    message.stakeCAsset !== undefined && (obj.stakeCAsset = message.stakeCAsset ? Coin.toJSON(message.stakeCAsset) : undefined);
    message.stakeFee !== undefined && (obj.stakeFee = message.stakeFee ? Coin.toJSON(message.stakeFee) : undefined);
    if (message.yAmountsOut) {
      obj.yAmountsOut = message.yAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yAmountsOut = [];
    }
    message.yammLpt !== undefined && (obj.yammLpt = message.yammLpt ? Coin.toJSON(message.yammLpt) : undefined);
    if (message.yammProtocolFee) {
      obj.yammProtocolFee = message.yammProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yammProtocolFee = [];
    }
    if (message.yammSwapFee) {
      obj.yammSwapFee = message.yammSwapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yammSwapFee = [];
    }
    message.baseAmountIn !== undefined && (obj.baseAmountIn = message.baseAmountIn ? Coin.toJSON(message.baseAmountIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ZeroImpactJoinAssetToYammResponse>): ZeroImpactJoinAssetToYammResponse {
    const message = createBaseZeroImpactJoinAssetToYammResponse();
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.stakeCAsset = object.stakeCAsset !== undefined && object.stakeCAsset !== null ? Coin.fromPartial(object.stakeCAsset) : undefined;
    message.stakeFee = object.stakeFee !== undefined && object.stakeFee !== null ? Coin.fromPartial(object.stakeFee) : undefined;
    message.yAmountsOut = object.yAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.yammLpt = object.yammLpt !== undefined && object.yammLpt !== null ? Coin.fromPartial(object.yammLpt) : undefined;
    message.yammProtocolFee = object.yammProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.yammSwapFee = object.yammSwapFee?.map(e => Coin.fromPartial(e)) || [];
    message.baseAmountIn = object.baseAmountIn !== undefined && object.baseAmountIn !== null ? Coin.fromPartial(object.baseAmountIn) : undefined;
    return message;
  },
  fromAmino(object: ZeroImpactJoinAssetToYammResponseAmino): ZeroImpactJoinAssetToYammResponse {
    const message = createBaseZeroImpactJoinAssetToYammResponse();
    if (object.refract_fee !== undefined && object.refract_fee !== null) {
      message.refractFee = Coin.fromAmino(object.refract_fee);
    }
    if (object.stake_c_asset !== undefined && object.stake_c_asset !== null) {
      message.stakeCAsset = Coin.fromAmino(object.stake_c_asset);
    }
    if (object.stake_fee !== undefined && object.stake_fee !== null) {
      message.stakeFee = Coin.fromAmino(object.stake_fee);
    }
    message.yAmountsOut = object.y_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.yamm_lpt !== undefined && object.yamm_lpt !== null) {
      message.yammLpt = Coin.fromAmino(object.yamm_lpt);
    }
    message.yammProtocolFee = object.yamm_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.yammSwapFee = object.yamm_swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.base_amount_in !== undefined && object.base_amount_in !== null) {
      message.baseAmountIn = Coin.fromAmino(object.base_amount_in);
    }
    return message;
  },
  toAmino(message: ZeroImpactJoinAssetToYammResponse, useInterfaces: boolean = true): ZeroImpactJoinAssetToYammResponseAmino {
    const obj: any = {};
    obj.refract_fee = message.refractFee ? Coin.toAmino(message.refractFee, useInterfaces) : undefined;
    obj.stake_c_asset = message.stakeCAsset ? Coin.toAmino(message.stakeCAsset, useInterfaces) : undefined;
    obj.stake_fee = message.stakeFee ? Coin.toAmino(message.stakeFee, useInterfaces) : undefined;
    if (message.yAmountsOut) {
      obj.y_amounts_out = message.yAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_amounts_out = message.yAmountsOut;
    }
    obj.yamm_lpt = message.yammLpt ? Coin.toAmino(message.yammLpt, useInterfaces) : undefined;
    if (message.yammProtocolFee) {
      obj.yamm_protocol_fee = message.yammProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_protocol_fee = message.yammProtocolFee;
    }
    if (message.yammSwapFee) {
      obj.yamm_swap_fee = message.yammSwapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_swap_fee = message.yammSwapFee;
    }
    obj.base_amount_in = message.baseAmountIn ? Coin.toAmino(message.baseAmountIn, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ZeroImpactJoinAssetToYammResponseAminoMsg): ZeroImpactJoinAssetToYammResponse {
    return ZeroImpactJoinAssetToYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ZeroImpactJoinAssetToYammResponseProtoMsg, useInterfaces: boolean = true): ZeroImpactJoinAssetToYammResponse {
    return ZeroImpactJoinAssetToYammResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ZeroImpactJoinAssetToYammResponse): Uint8Array {
    return ZeroImpactJoinAssetToYammResponse.encode(message).finish();
  },
  toProtoMsg(message: ZeroImpactJoinAssetToYammResponse): ZeroImpactJoinAssetToYammResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToYammResponse",
      value: ZeroImpactJoinAssetToYammResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ZeroImpactJoinAssetToYammResponse.typeUrl, ZeroImpactJoinAssetToYammResponse);
function createBaseExecuteMsg_ZeroImpactJoinAssetToNested(): ExecuteMsg_ZeroImpactJoinAssetToNested {
  return {
    poolId: "",
    stakingMethod: StakingMethod.fromPartial({}),
    minLptOut: ""
  };
}
export const ExecuteMsg_ZeroImpactJoinAssetToNested = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToNested",
  is(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToNested {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToNested.typeUrl || typeof o.poolId === "string" && StakingMethod.is(o.stakingMethod) && typeof o.minLptOut === "string");
  },
  isSDK(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToNestedSDKType {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToNested.typeUrl || typeof o.pool_id === "string" && StakingMethod.isSDK(o.staking_method) && typeof o.min_lpt_out === "string");
  },
  isAmino(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToNestedAmino {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToNested.typeUrl || typeof o.pool_id === "string" && StakingMethod.isAmino(o.staking_method) && typeof o.min_lpt_out === "string");
  },
  encode(message: ExecuteMsg_ZeroImpactJoinAssetToNested, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.stakingMethod !== undefined) {
      StakingMethod.encode(message.stakingMethod, writer.uint32(18).fork()).ldelim();
    }
    if (message.minLptOut !== "") {
      writer.uint32(26).string(message.minLptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToNested {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToNested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.stakingMethod = StakingMethod.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_ZeroImpactJoinAssetToNested {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      stakingMethod: isSet(object.stakingMethod) ? StakingMethod.fromJSON(object.stakingMethod) : undefined,
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : ""
    };
  },
  toJSON(message: ExecuteMsg_ZeroImpactJoinAssetToNested): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.stakingMethod !== undefined && (obj.stakingMethod = message.stakingMethod ? StakingMethod.toJSON(message.stakingMethod) : undefined);
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_ZeroImpactJoinAssetToNested>): ExecuteMsg_ZeroImpactJoinAssetToNested {
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToNested();
    message.poolId = object.poolId ?? "";
    message.stakingMethod = object.stakingMethod !== undefined && object.stakingMethod !== null ? StakingMethod.fromPartial(object.stakingMethod) : undefined;
    message.minLptOut = object.minLptOut ?? "";
    return message;
  },
  fromAmino(object: ExecuteMsg_ZeroImpactJoinAssetToNestedAmino): ExecuteMsg_ZeroImpactJoinAssetToNested {
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToNested();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.staking_method !== undefined && object.staking_method !== null) {
      message.stakingMethod = StakingMethod.fromAmino(object.staking_method);
    }
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    return message;
  },
  toAmino(message: ExecuteMsg_ZeroImpactJoinAssetToNested, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToNestedAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.staking_method = message.stakingMethod ? StakingMethod.toAmino(message.stakingMethod, useInterfaces) : undefined;
    obj.min_lpt_out = message.minLptOut === "" ? undefined : message.minLptOut;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_ZeroImpactJoinAssetToNestedAminoMsg): ExecuteMsg_ZeroImpactJoinAssetToNested {
    return ExecuteMsg_ZeroImpactJoinAssetToNested.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_ZeroImpactJoinAssetToNestedProtoMsg, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToNested {
    return ExecuteMsg_ZeroImpactJoinAssetToNested.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_ZeroImpactJoinAssetToNested): Uint8Array {
    return ExecuteMsg_ZeroImpactJoinAssetToNested.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_ZeroImpactJoinAssetToNested): ExecuteMsg_ZeroImpactJoinAssetToNestedProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToNested",
      value: ExecuteMsg_ZeroImpactJoinAssetToNested.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_ZeroImpactJoinAssetToNested.typeUrl, ExecuteMsg_ZeroImpactJoinAssetToNested);
function createBaseQueryMsg_SimulateZeroImpactJoinAssetToNested(): QueryMsg_SimulateZeroImpactJoinAssetToNested {
  return {
    amountIn: Coin.fromPartial({}),
    poolId: "",
    stakingMethod: StakingMethod.fromPartial({})
  };
}
export const QueryMsg_SimulateZeroImpactJoinAssetToNested = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToNested",
  is(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToNested {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToNested.typeUrl || Coin.is(o.amountIn) && typeof o.poolId === "string" && StakingMethod.is(o.stakingMethod));
  },
  isSDK(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToNestedSDKType {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToNested.typeUrl || Coin.isSDK(o.amount_in) && typeof o.pool_id === "string" && StakingMethod.isSDK(o.staking_method));
  },
  isAmino(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToNested.typeUrl || Coin.isAmino(o.amount_in) && typeof o.pool_id === "string" && StakingMethod.isAmino(o.staking_method));
  },
  encode(message: QueryMsg_SimulateZeroImpactJoinAssetToNested, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    if (message.stakingMethod !== undefined) {
      StakingMethod.encode(message.stakingMethod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToNested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.poolId = reader.string();
          break;
        case 3:
          message.stakingMethod = StakingMethod.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      stakingMethod: isSet(object.stakingMethod) ? StakingMethod.fromJSON(object.stakingMethod) : undefined
    };
  },
  toJSON(message: QueryMsg_SimulateZeroImpactJoinAssetToNested): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.stakingMethod !== undefined && (obj.stakingMethod = message.stakingMethod ? StakingMethod.toJSON(message.stakingMethod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMsg_SimulateZeroImpactJoinAssetToNested>): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToNested();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.poolId = object.poolId ?? "";
    message.stakingMethod = object.stakingMethod !== undefined && object.stakingMethod !== null ? StakingMethod.fromPartial(object.stakingMethod) : undefined;
    return message;
  },
  fromAmino(object: QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToNested();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.staking_method !== undefined && object.staking_method !== null) {
      message.stakingMethod = StakingMethod.fromAmino(object.staking_method);
    }
    return message;
  },
  toAmino(message: QueryMsg_SimulateZeroImpactJoinAssetToNested, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToNestedAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.staking_method = message.stakingMethod ? StakingMethod.toAmino(message.stakingMethod, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsg_SimulateZeroImpactJoinAssetToNestedAminoMsg): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    return QueryMsg_SimulateZeroImpactJoinAssetToNested.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_SimulateZeroImpactJoinAssetToNestedProtoMsg, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToNested {
    return QueryMsg_SimulateZeroImpactJoinAssetToNested.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_SimulateZeroImpactJoinAssetToNested): Uint8Array {
    return QueryMsg_SimulateZeroImpactJoinAssetToNested.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_SimulateZeroImpactJoinAssetToNested): QueryMsg_SimulateZeroImpactJoinAssetToNestedProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToNested",
      value: QueryMsg_SimulateZeroImpactJoinAssetToNested.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_SimulateZeroImpactJoinAssetToNested.typeUrl, QueryMsg_SimulateZeroImpactJoinAssetToNested);
function createBasePageRequest_for_String(): PageRequest_for_String {
  return {
    key: "",
    limit: 0
  };
}
export const PageRequest_for_String = {
  typeUrl: "/pryzmatics.pryzmnexus.PageRequest_for_String",
  is(o: any): o is PageRequest_for_String {
    return o && (o.$typeUrl === PageRequest_for_String.typeUrl || typeof o.key === "string" && typeof o.limit === "number");
  },
  isSDK(o: any): o is PageRequest_for_StringSDKType {
    return o && (o.$typeUrl === PageRequest_for_String.typeUrl || typeof o.key === "string" && typeof o.limit === "number");
  },
  isAmino(o: any): o is PageRequest_for_StringAmino {
    return o && (o.$typeUrl === PageRequest_for_String.typeUrl || typeof o.key === "string" && typeof o.limit === "number");
  },
  encode(message: PageRequest_for_String, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PageRequest_for_String {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest_for_String();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PageRequest_for_String {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },
  toJSON(message: PageRequest_for_String): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },
  fromPartial(object: Partial<PageRequest_for_String>): PageRequest_for_String {
    const message = createBasePageRequest_for_String();
    message.key = object.key ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
  fromAmino(object: PageRequest_for_StringAmino): PageRequest_for_String {
    const message = createBasePageRequest_for_String();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    return message;
  },
  toAmino(message: PageRequest_for_String, useInterfaces: boolean = true): PageRequest_for_StringAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    return obj;
  },
  fromAminoMsg(object: PageRequest_for_StringAminoMsg): PageRequest_for_String {
    return PageRequest_for_String.fromAmino(object.value);
  },
  fromProtoMsg(message: PageRequest_for_StringProtoMsg, useInterfaces: boolean = true): PageRequest_for_String {
    return PageRequest_for_String.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PageRequest_for_String): Uint8Array {
    return PageRequest_for_String.encode(message).finish();
  },
  toProtoMsg(message: PageRequest_for_String): PageRequest_for_StringProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.PageRequest_for_String",
      value: PageRequest_for_String.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PageRequest_for_String.typeUrl, PageRequest_for_String);
function createBaseExecuteMsg_Batch(): ExecuteMsg_Batch {
  return {
    minAmountsOut: [],
    operations: []
  };
}
export const ExecuteMsg_Batch = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Batch",
  is(o: any): o is ExecuteMsg_Batch {
    return o && (o.$typeUrl === ExecuteMsg_Batch.typeUrl || Array.isArray(o.minAmountsOut) && (!o.minAmountsOut.length || Coin.is(o.minAmountsOut[0])) && Array.isArray(o.operations) && (!o.operations.length || Operation.is(o.operations[0])));
  },
  isSDK(o: any): o is ExecuteMsg_BatchSDKType {
    return o && (o.$typeUrl === ExecuteMsg_Batch.typeUrl || Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isSDK(o.min_amounts_out[0])) && Array.isArray(o.operations) && (!o.operations.length || Operation.isSDK(o.operations[0])));
  },
  isAmino(o: any): o is ExecuteMsg_BatchAmino {
    return o && (o.$typeUrl === ExecuteMsg_Batch.typeUrl || Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isAmino(o.min_amounts_out[0])) && Array.isArray(o.operations) && (!o.operations.length || Operation.isAmino(o.operations[0])));
  },
  encode(message: ExecuteMsg_Batch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_Batch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_Batch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.operations.push(Operation.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_Batch {
    return {
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : []
    };
  },
  toJSON(message: ExecuteMsg_Batch): unknown {
    const obj: any = {};
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_Batch>): ExecuteMsg_Batch {
    const message = createBaseExecuteMsg_Batch();
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.operations = object.operations?.map(e => Operation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExecuteMsg_BatchAmino): ExecuteMsg_Batch {
    const message = createBaseExecuteMsg_Batch();
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.operations = object.operations?.map(e => Operation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExecuteMsg_Batch, useInterfaces: boolean = true): ExecuteMsg_BatchAmino {
    const obj: any = {};
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.operations = message.operations;
    }
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_BatchAminoMsg): ExecuteMsg_Batch {
    return ExecuteMsg_Batch.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_BatchProtoMsg, useInterfaces: boolean = true): ExecuteMsg_Batch {
    return ExecuteMsg_Batch.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_Batch): Uint8Array {
    return ExecuteMsg_Batch.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_Batch): ExecuteMsg_BatchProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Batch",
      value: ExecuteMsg_Batch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_Batch.typeUrl, ExecuteMsg_Batch);
function createBaseExecuteMsg_Unpause(): ExecuteMsg_Unpause {
  return {};
}
export const ExecuteMsg_Unpause = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Unpause",
  is(o: any): o is ExecuteMsg_Unpause {
    return o && o.$typeUrl === ExecuteMsg_Unpause.typeUrl;
  },
  isSDK(o: any): o is ExecuteMsg_UnpauseSDKType {
    return o && o.$typeUrl === ExecuteMsg_Unpause.typeUrl;
  },
  isAmino(o: any): o is ExecuteMsg_UnpauseAmino {
    return o && o.$typeUrl === ExecuteMsg_Unpause.typeUrl;
  },
  encode(_: ExecuteMsg_Unpause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_Unpause {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_Unpause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ExecuteMsg_Unpause {
    return {};
  },
  toJSON(_: ExecuteMsg_Unpause): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ExecuteMsg_Unpause>): ExecuteMsg_Unpause {
    const message = createBaseExecuteMsg_Unpause();
    return message;
  },
  fromAmino(_: ExecuteMsg_UnpauseAmino): ExecuteMsg_Unpause {
    const message = createBaseExecuteMsg_Unpause();
    return message;
  },
  toAmino(_: ExecuteMsg_Unpause, useInterfaces: boolean = true): ExecuteMsg_UnpauseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_UnpauseAminoMsg): ExecuteMsg_Unpause {
    return ExecuteMsg_Unpause.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_UnpauseProtoMsg, useInterfaces: boolean = true): ExecuteMsg_Unpause {
    return ExecuteMsg_Unpause.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_Unpause): Uint8Array {
    return ExecuteMsg_Unpause.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_Unpause): ExecuteMsg_UnpauseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Unpause",
      value: ExecuteMsg_Unpause.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_Unpause.typeUrl, ExecuteMsg_Unpause);
function createBaseExecuteMsg_ZeroImpactJoinAssetToYamm(): ExecuteMsg_ZeroImpactJoinAssetToYamm {
  return {
    minLptOut: "",
    stakingMethod: StakingMethod.fromPartial({})
  };
}
export const ExecuteMsg_ZeroImpactJoinAssetToYamm = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToYamm",
  is(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToYamm {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToYamm.typeUrl || typeof o.minLptOut === "string" && StakingMethod.is(o.stakingMethod));
  },
  isSDK(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToYammSDKType {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToYamm.typeUrl || typeof o.min_lpt_out === "string" && StakingMethod.isSDK(o.staking_method));
  },
  isAmino(o: any): o is ExecuteMsg_ZeroImpactJoinAssetToYammAmino {
    return o && (o.$typeUrl === ExecuteMsg_ZeroImpactJoinAssetToYamm.typeUrl || typeof o.min_lpt_out === "string" && StakingMethod.isAmino(o.staking_method));
  },
  encode(message: ExecuteMsg_ZeroImpactJoinAssetToYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minLptOut !== "") {
      writer.uint32(10).string(message.minLptOut);
    }
    if (message.stakingMethod !== undefined) {
      StakingMethod.encode(message.stakingMethod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLptOut = reader.string();
          break;
        case 2:
          message.stakingMethod = StakingMethod.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    return {
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : "",
      stakingMethod: isSet(object.stakingMethod) ? StakingMethod.fromJSON(object.stakingMethod) : undefined
    };
  },
  toJSON(message: ExecuteMsg_ZeroImpactJoinAssetToYamm): unknown {
    const obj: any = {};
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    message.stakingMethod !== undefined && (obj.stakingMethod = message.stakingMethod ? StakingMethod.toJSON(message.stakingMethod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_ZeroImpactJoinAssetToYamm>): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToYamm();
    message.minLptOut = object.minLptOut ?? "";
    message.stakingMethod = object.stakingMethod !== undefined && object.stakingMethod !== null ? StakingMethod.fromPartial(object.stakingMethod) : undefined;
    return message;
  },
  fromAmino(object: ExecuteMsg_ZeroImpactJoinAssetToYammAmino): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    const message = createBaseExecuteMsg_ZeroImpactJoinAssetToYamm();
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    if (object.staking_method !== undefined && object.staking_method !== null) {
      message.stakingMethod = StakingMethod.fromAmino(object.staking_method);
    }
    return message;
  },
  toAmino(message: ExecuteMsg_ZeroImpactJoinAssetToYamm, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToYammAmino {
    const obj: any = {};
    obj.min_lpt_out = message.minLptOut === "" ? undefined : message.minLptOut;
    obj.staking_method = message.stakingMethod ? StakingMethod.toAmino(message.stakingMethod, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_ZeroImpactJoinAssetToYammAminoMsg): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    return ExecuteMsg_ZeroImpactJoinAssetToYamm.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_ZeroImpactJoinAssetToYammProtoMsg, useInterfaces: boolean = true): ExecuteMsg_ZeroImpactJoinAssetToYamm {
    return ExecuteMsg_ZeroImpactJoinAssetToYamm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_ZeroImpactJoinAssetToYamm): Uint8Array {
    return ExecuteMsg_ZeroImpactJoinAssetToYamm.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_ZeroImpactJoinAssetToYamm): ExecuteMsg_ZeroImpactJoinAssetToYammProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_ZeroImpactJoinAssetToYamm",
      value: ExecuteMsg_ZeroImpactJoinAssetToYamm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_ZeroImpactJoinAssetToYamm.typeUrl, ExecuteMsg_ZeroImpactJoinAssetToYamm);
function createBasePausedResponse(): PausedResponse {
  return {
    paused: false
  };
}
export const PausedResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.PausedResponse",
  is(o: any): o is PausedResponse {
    return o && (o.$typeUrl === PausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  isSDK(o: any): o is PausedResponseSDKType {
    return o && (o.$typeUrl === PausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  isAmino(o: any): o is PausedResponseAmino {
    return o && (o.$typeUrl === PausedResponse.typeUrl || typeof o.paused === "boolean");
  },
  encode(message: PausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PausedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PausedResponse {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: PausedResponse): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<PausedResponse>): PausedResponse {
    const message = createBasePausedResponse();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: PausedResponseAmino): PausedResponse {
    const message = createBasePausedResponse();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: PausedResponse, useInterfaces: boolean = true): PausedResponseAmino {
    const obj: any = {};
    obj.paused = message.paused === false ? undefined : message.paused;
    return obj;
  },
  fromAminoMsg(object: PausedResponseAminoMsg): PausedResponse {
    return PausedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PausedResponseProtoMsg, useInterfaces: boolean = true): PausedResponse {
    return PausedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PausedResponse): Uint8Array {
    return PausedResponse.encode(message).finish();
  },
  toProtoMsg(message: PausedResponse): PausedResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.PausedResponse",
      value: PausedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PausedResponse.typeUrl, PausedResponse);
function createBaseStakeContractResponse(): StakeContractResponse {
  return {
    contract: StakeContract.fromPartial({})
  };
}
export const StakeContractResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContractResponse",
  is(o: any): o is StakeContractResponse {
    return o && (o.$typeUrl === StakeContractResponse.typeUrl || StakeContract.is(o.contract));
  },
  isSDK(o: any): o is StakeContractResponseSDKType {
    return o && (o.$typeUrl === StakeContractResponse.typeUrl || StakeContract.isSDK(o.contract));
  },
  isAmino(o: any): o is StakeContractResponseAmino {
    return o && (o.$typeUrl === StakeContractResponse.typeUrl || StakeContract.isAmino(o.contract));
  },
  encode(message: StakeContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      StakeContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakeContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = StakeContract.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeContractResponse {
    return {
      contract: isSet(object.contract) ? StakeContract.fromJSON(object.contract) : undefined
    };
  },
  toJSON(message: StakeContractResponse): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? StakeContract.toJSON(message.contract) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StakeContractResponse>): StakeContractResponse {
    const message = createBaseStakeContractResponse();
    message.contract = object.contract !== undefined && object.contract !== null ? StakeContract.fromPartial(object.contract) : undefined;
    return message;
  },
  fromAmino(object: StakeContractResponseAmino): StakeContractResponse {
    const message = createBaseStakeContractResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = StakeContract.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: StakeContractResponse, useInterfaces: boolean = true): StakeContractResponseAmino {
    const obj: any = {};
    obj.contract = message.contract ? StakeContract.toAmino(message.contract, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakeContractResponseAminoMsg): StakeContractResponse {
    return StakeContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeContractResponseProtoMsg, useInterfaces: boolean = true): StakeContractResponse {
    return StakeContractResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakeContractResponse): Uint8Array {
    return StakeContractResponse.encode(message).finish();
  },
  toProtoMsg(message: StakeContractResponse): StakeContractResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakeContractResponse",
      value: StakeContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakeContractResponse.typeUrl, StakeContractResponse);
function createBaseAdminResponse(): AdminResponse {
  return {
    admin: ""
  };
}
export const AdminResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.AdminResponse",
  is(o: any): o is AdminResponse {
    return o && (o.$typeUrl === AdminResponse.typeUrl || typeof o.admin === "string");
  },
  isSDK(o: any): o is AdminResponseSDKType {
    return o && (o.$typeUrl === AdminResponse.typeUrl || typeof o.admin === "string");
  },
  isAmino(o: any): o is AdminResponseAmino {
    return o && (o.$typeUrl === AdminResponse.typeUrl || typeof o.admin === "string");
  },
  encode(message: AdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AdminResponse {
    return {
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toJSON(message: AdminResponse): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: Partial<AdminResponse>): AdminResponse {
    const message = createBaseAdminResponse();
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: AdminResponseAmino): AdminResponse {
    const message = createBaseAdminResponse();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: AdminResponse, useInterfaces: boolean = true): AdminResponseAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    return obj;
  },
  fromAminoMsg(object: AdminResponseAminoMsg): AdminResponse {
    return AdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AdminResponseProtoMsg, useInterfaces: boolean = true): AdminResponse {
    return AdminResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AdminResponse): Uint8Array {
    return AdminResponse.encode(message).finish();
  },
  toProtoMsg(message: AdminResponse): AdminResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.AdminResponse",
      value: AdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AdminResponse.typeUrl, AdminResponse);
function createBaseStakeContract(): StakeContract {
  return {
    address: "",
    apiType: 0,
    cDenom: "",
    denom: ""
  };
}
export const StakeContract = {
  typeUrl: "/pryzmatics.pryzmnexus.StakeContract",
  is(o: any): o is StakeContract {
    return o && (o.$typeUrl === StakeContract.typeUrl || typeof o.address === "string" && isSet(o.apiType) && typeof o.cDenom === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is StakeContractSDKType {
    return o && (o.$typeUrl === StakeContract.typeUrl || typeof o.address === "string" && isSet(o.api_type) && typeof o.c_denom === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is StakeContractAmino {
    return o && (o.$typeUrl === StakeContract.typeUrl || typeof o.address === "string" && isSet(o.api_type) && typeof o.c_denom === "string" && typeof o.denom === "string");
  },
  encode(message: StakeContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.apiType !== 0) {
      writer.uint32(16).int32(message.apiType);
    }
    if (message.cDenom !== "") {
      writer.uint32(26).string(message.cDenom);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakeContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.apiType = (reader.int32() as any);
          break;
        case 3:
          message.cDenom = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakeContract {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      apiType: isSet(object.apiType) ? stakeContractTypeFromJSON(object.apiType) : -1,
      cDenom: isSet(object.cDenom) ? String(object.cDenom) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: StakeContract): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.apiType !== undefined && (obj.apiType = stakeContractTypeToJSON(message.apiType));
    message.cDenom !== undefined && (obj.cDenom = message.cDenom);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<StakeContract>): StakeContract {
    const message = createBaseStakeContract();
    message.address = object.address ?? "";
    message.apiType = object.apiType ?? 0;
    message.cDenom = object.cDenom ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: StakeContractAmino): StakeContract {
    const message = createBaseStakeContract();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.api_type !== undefined && object.api_type !== null) {
      message.apiType = object.api_type;
    }
    if (object.c_denom !== undefined && object.c_denom !== null) {
      message.cDenom = object.c_denom;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: StakeContract, useInterfaces: boolean = true): StakeContractAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.api_type = message.apiType === 0 ? undefined : message.apiType;
    obj.c_denom = message.cDenom === "" ? undefined : message.cDenom;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: StakeContractAminoMsg): StakeContract {
    return StakeContract.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeContractProtoMsg, useInterfaces: boolean = true): StakeContract {
    return StakeContract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakeContract): Uint8Array {
    return StakeContract.encode(message).finish();
  },
  toProtoMsg(message: StakeContract): StakeContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakeContract",
      value: StakeContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakeContract.typeUrl, StakeContract);
function createBaseOperation(): Operation {
  return {
    batchSwap: undefined,
    refract: undefined,
    redeem: undefined,
    stake: undefined
  };
}
export const Operation = {
  typeUrl: "/pryzmatics.pryzmnexus.Operation",
  is(o: any): o is Operation {
    return o && o.$typeUrl === Operation.typeUrl;
  },
  isSDK(o: any): o is OperationSDKType {
    return o && o.$typeUrl === Operation.typeUrl;
  },
  isAmino(o: any): o is OperationAmino {
    return o && o.$typeUrl === Operation.typeUrl;
  },
  encode(message: Operation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchSwap !== undefined) {
      Operation_BatchSwap.encode(message.batchSwap, writer.uint32(10).fork()).ldelim();
    }
    if (message.refract !== undefined) {
      Operation_Refract.encode(message.refract, writer.uint32(18).fork()).ldelim();
    }
    if (message.redeem !== undefined) {
      Operation_Redeem.encode(message.redeem, writer.uint32(26).fork()).ldelim();
    }
    if (message.stake !== undefined) {
      Operation_Stake.encode(message.stake, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Operation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchSwap = Operation_BatchSwap.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.refract = Operation_Refract.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.redeem = Operation_Redeem.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.stake = Operation_Stake.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation {
    return {
      batchSwap: isSet(object.batchSwap) ? Operation_BatchSwap.fromJSON(object.batchSwap) : undefined,
      refract: isSet(object.refract) ? Operation_Refract.fromJSON(object.refract) : undefined,
      redeem: isSet(object.redeem) ? Operation_Redeem.fromJSON(object.redeem) : undefined,
      stake: isSet(object.stake) ? Operation_Stake.fromJSON(object.stake) : undefined
    };
  },
  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.batchSwap !== undefined && (obj.batchSwap = message.batchSwap ? Operation_BatchSwap.toJSON(message.batchSwap) : undefined);
    message.refract !== undefined && (obj.refract = message.refract ? Operation_Refract.toJSON(message.refract) : undefined);
    message.redeem !== undefined && (obj.redeem = message.redeem ? Operation_Redeem.toJSON(message.redeem) : undefined);
    message.stake !== undefined && (obj.stake = message.stake ? Operation_Stake.toJSON(message.stake) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Operation>): Operation {
    const message = createBaseOperation();
    message.batchSwap = object.batchSwap !== undefined && object.batchSwap !== null ? Operation_BatchSwap.fromPartial(object.batchSwap) : undefined;
    message.refract = object.refract !== undefined && object.refract !== null ? Operation_Refract.fromPartial(object.refract) : undefined;
    message.redeem = object.redeem !== undefined && object.redeem !== null ? Operation_Redeem.fromPartial(object.redeem) : undefined;
    message.stake = object.stake !== undefined && object.stake !== null ? Operation_Stake.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: OperationAmino): Operation {
    const message = createBaseOperation();
    if (object.batch_swap !== undefined && object.batch_swap !== null) {
      message.batchSwap = Operation_BatchSwap.fromAmino(object.batch_swap);
    }
    if (object.refract !== undefined && object.refract !== null) {
      message.refract = Operation_Refract.fromAmino(object.refract);
    }
    if (object.redeem !== undefined && object.redeem !== null) {
      message.redeem = Operation_Redeem.fromAmino(object.redeem);
    }
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Operation_Stake.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: Operation, useInterfaces: boolean = true): OperationAmino {
    const obj: any = {};
    obj.batch_swap = message.batchSwap ? Operation_BatchSwap.toAmino(message.batchSwap, useInterfaces) : undefined;
    obj.refract = message.refract ? Operation_Refract.toAmino(message.refract, useInterfaces) : undefined;
    obj.redeem = message.redeem ? Operation_Redeem.toAmino(message.redeem, useInterfaces) : undefined;
    obj.stake = message.stake ? Operation_Stake.toAmino(message.stake, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OperationAminoMsg): Operation {
    return Operation.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationProtoMsg, useInterfaces: boolean = true): Operation {
    return Operation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Operation): Uint8Array {
    return Operation.encode(message).finish();
  },
  toProtoMsg(message: Operation): OperationProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Operation",
      value: Operation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Operation.typeUrl, Operation);
function createBaseExecutedOperation(): ExecutedOperation {
  return {
    operation: Operation.fromPartial({}),
    amountsOut: [],
    amountsIn: [],
    fees: []
  };
}
export const ExecutedOperation = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecutedOperation",
  is(o: any): o is ExecutedOperation {
    return o && (o.$typeUrl === ExecutedOperation.typeUrl || Operation.is(o.operation) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin1.is(o.amountsOut[0])) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin1.is(o.amountsIn[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin1.is(o.fees[0])));
  },
  isSDK(o: any): o is ExecutedOperationSDKType {
    return o && (o.$typeUrl === ExecutedOperation.typeUrl || Operation.isSDK(o.operation) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin1.isSDK(o.amounts_out[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin1.isSDK(o.amounts_in[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin1.isSDK(o.fees[0])));
  },
  isAmino(o: any): o is ExecutedOperationAmino {
    return o && (o.$typeUrl === ExecutedOperation.typeUrl || Operation.isAmino(o.operation) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin1.isAmino(o.amounts_out[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin1.isAmino(o.amounts_in[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin1.isAmino(o.fees[0])));
  },
  encode(message: ExecutedOperation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operation !== undefined) {
      Operation.encode(message.operation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin1.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin1.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.fees) {
      Coin1.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecutedOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutedOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = Operation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsOut.push(Coin1.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.amountsIn.push(Coin1.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.fees.push(Coin1.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecutedOperation {
    return {
      operation: isSet(object.operation) ? Operation.fromJSON(object.operation) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin1.fromJSON(e)) : [],
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin1.fromJSON(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin1.fromJSON(e)) : []
    };
  },
  toJSON(message: ExecutedOperation): unknown {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = message.operation ? Operation.toJSON(message.operation) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin1.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin1.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin1.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ExecutedOperation>): ExecutedOperation {
    const message = createBaseExecutedOperation();
    message.operation = object.operation !== undefined && object.operation !== null ? Operation.fromPartial(object.operation) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin1.fromPartial(e)) || [];
    message.amountsIn = object.amountsIn?.map(e => Coin1.fromPartial(e)) || [];
    message.fees = object.fees?.map(e => Coin1.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExecutedOperationAmino): ExecutedOperation {
    const message = createBaseExecutedOperation();
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = Operation.fromAmino(object.operation);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin1.fromAmino(e)) || [];
    message.amountsIn = object.amounts_in?.map(e => Coin1.fromAmino(e)) || [];
    message.fees = object.fees?.map(e => Coin1.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExecutedOperation, useInterfaces: boolean = true): ExecutedOperationAmino {
    const obj: any = {};
    obj.operation = message.operation ? Operation.toAmino(message.operation, useInterfaces) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin1.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin1.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin1.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fees = message.fees;
    }
    return obj;
  },
  fromAminoMsg(object: ExecutedOperationAminoMsg): ExecutedOperation {
    return ExecutedOperation.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutedOperationProtoMsg, useInterfaces: boolean = true): ExecutedOperation {
    return ExecutedOperation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecutedOperation): Uint8Array {
    return ExecutedOperation.encode(message).finish();
  },
  toProtoMsg(message: ExecutedOperation): ExecutedOperationProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecutedOperation",
      value: ExecutedOperation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecutedOperation.typeUrl, ExecutedOperation);
function createBaseQueryMsg_Paused(): QueryMsg_Paused {
  return {};
}
export const QueryMsg_Paused = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Paused",
  is(o: any): o is QueryMsg_Paused {
    return o && o.$typeUrl === QueryMsg_Paused.typeUrl;
  },
  isSDK(o: any): o is QueryMsg_PausedSDKType {
    return o && o.$typeUrl === QueryMsg_Paused.typeUrl;
  },
  isAmino(o: any): o is QueryMsg_PausedAmino {
    return o && o.$typeUrl === QueryMsg_Paused.typeUrl;
  },
  encode(_: QueryMsg_Paused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_Paused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_Paused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryMsg_Paused {
    return {};
  },
  toJSON(_: QueryMsg_Paused): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMsg_Paused>): QueryMsg_Paused {
    const message = createBaseQueryMsg_Paused();
    return message;
  },
  fromAmino(_: QueryMsg_PausedAmino): QueryMsg_Paused {
    const message = createBaseQueryMsg_Paused();
    return message;
  },
  toAmino(_: QueryMsg_Paused, useInterfaces: boolean = true): QueryMsg_PausedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMsg_PausedAminoMsg): QueryMsg_Paused {
    return QueryMsg_Paused.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_PausedProtoMsg, useInterfaces: boolean = true): QueryMsg_Paused {
    return QueryMsg_Paused.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_Paused): Uint8Array {
    return QueryMsg_Paused.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_Paused): QueryMsg_PausedProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Paused",
      value: QueryMsg_Paused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_Paused.typeUrl, QueryMsg_Paused);
function createBaseZeroImpactJoinAssetToNestedResponse(): ZeroImpactJoinAssetToNestedResponse {
  return {
    baseAmountToJoin: Coin.fromPartial({}),
    nestedProtocolFee: [],
    nestedSwapFee: [],
    stakeFee: Coin.fromPartial({}),
    yAmountsOut: [],
    baseAmountIn: Coin.fromPartial({}),
    nestedLpt: Coin.fromPartial({}),
    refractFee: Coin.fromPartial({}),
    stakeCAsset: Coin.fromPartial({}),
    yammLpt: Coin.fromPartial({}),
    yammProtocolFee: [],
    yammSwapFee: []
  };
}
export const ZeroImpactJoinAssetToNestedResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToNestedResponse",
  is(o: any): o is ZeroImpactJoinAssetToNestedResponse {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToNestedResponse.typeUrl || Coin.is(o.baseAmountToJoin) && Array.isArray(o.nestedProtocolFee) && (!o.nestedProtocolFee.length || Coin.is(o.nestedProtocolFee[0])) && Array.isArray(o.nestedSwapFee) && (!o.nestedSwapFee.length || Coin.is(o.nestedSwapFee[0])) && Coin.is(o.stakeFee) && Array.isArray(o.yAmountsOut) && (!o.yAmountsOut.length || Coin.is(o.yAmountsOut[0])) && Coin.is(o.baseAmountIn) && Coin.is(o.nestedLpt) && Coin.is(o.refractFee) && Coin.is(o.stakeCAsset) && Coin.is(o.yammLpt) && Array.isArray(o.yammProtocolFee) && (!o.yammProtocolFee.length || Coin.is(o.yammProtocolFee[0])) && Array.isArray(o.yammSwapFee) && (!o.yammSwapFee.length || Coin.is(o.yammSwapFee[0])));
  },
  isSDK(o: any): o is ZeroImpactJoinAssetToNestedResponseSDKType {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToNestedResponse.typeUrl || Coin.isSDK(o.base_amount_to_join) && Array.isArray(o.nested_protocol_fee) && (!o.nested_protocol_fee.length || Coin.isSDK(o.nested_protocol_fee[0])) && Array.isArray(o.nested_swap_fee) && (!o.nested_swap_fee.length || Coin.isSDK(o.nested_swap_fee[0])) && Coin.isSDK(o.stake_fee) && Array.isArray(o.y_amounts_out) && (!o.y_amounts_out.length || Coin.isSDK(o.y_amounts_out[0])) && Coin.isSDK(o.base_amount_in) && Coin.isSDK(o.nested_lpt) && Coin.isSDK(o.refract_fee) && Coin.isSDK(o.stake_c_asset) && Coin.isSDK(o.yamm_lpt) && Array.isArray(o.yamm_protocol_fee) && (!o.yamm_protocol_fee.length || Coin.isSDK(o.yamm_protocol_fee[0])) && Array.isArray(o.yamm_swap_fee) && (!o.yamm_swap_fee.length || Coin.isSDK(o.yamm_swap_fee[0])));
  },
  isAmino(o: any): o is ZeroImpactJoinAssetToNestedResponseAmino {
    return o && (o.$typeUrl === ZeroImpactJoinAssetToNestedResponse.typeUrl || Coin.isAmino(o.base_amount_to_join) && Array.isArray(o.nested_protocol_fee) && (!o.nested_protocol_fee.length || Coin.isAmino(o.nested_protocol_fee[0])) && Array.isArray(o.nested_swap_fee) && (!o.nested_swap_fee.length || Coin.isAmino(o.nested_swap_fee[0])) && Coin.isAmino(o.stake_fee) && Array.isArray(o.y_amounts_out) && (!o.y_amounts_out.length || Coin.isAmino(o.y_amounts_out[0])) && Coin.isAmino(o.base_amount_in) && Coin.isAmino(o.nested_lpt) && Coin.isAmino(o.refract_fee) && Coin.isAmino(o.stake_c_asset) && Coin.isAmino(o.yamm_lpt) && Array.isArray(o.yamm_protocol_fee) && (!o.yamm_protocol_fee.length || Coin.isAmino(o.yamm_protocol_fee[0])) && Array.isArray(o.yamm_swap_fee) && (!o.yamm_swap_fee.length || Coin.isAmino(o.yamm_swap_fee[0])));
  },
  encode(message: ZeroImpactJoinAssetToNestedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAmountToJoin !== undefined) {
      Coin.encode(message.baseAmountToJoin, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nestedProtocolFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nestedSwapFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.stakeFee !== undefined) {
      Coin.encode(message.stakeFee, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.yAmountsOut) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.baseAmountIn !== undefined) {
      Coin.encode(message.baseAmountIn, writer.uint32(50).fork()).ldelim();
    }
    if (message.nestedLpt !== undefined) {
      Coin.encode(message.nestedLpt, writer.uint32(58).fork()).ldelim();
    }
    if (message.refractFee !== undefined) {
      Coin.encode(message.refractFee, writer.uint32(66).fork()).ldelim();
    }
    if (message.stakeCAsset !== undefined) {
      Coin.encode(message.stakeCAsset, writer.uint32(74).fork()).ldelim();
    }
    if (message.yammLpt !== undefined) {
      Coin.encode(message.yammLpt, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.yammProtocolFee) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.yammSwapFee) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ZeroImpactJoinAssetToNestedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroImpactJoinAssetToNestedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAmountToJoin = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.nestedProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.nestedSwapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.stakeFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.yAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.baseAmountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.nestedLpt = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.refractFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.stakeCAsset = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 10:
          message.yammLpt = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          message.yammProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 12:
          message.yammSwapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ZeroImpactJoinAssetToNestedResponse {
    return {
      baseAmountToJoin: isSet(object.baseAmountToJoin) ? Coin.fromJSON(object.baseAmountToJoin) : undefined,
      nestedProtocolFee: Array.isArray(object?.nestedProtocolFee) ? object.nestedProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      nestedSwapFee: Array.isArray(object?.nestedSwapFee) ? object.nestedSwapFee.map((e: any) => Coin.fromJSON(e)) : [],
      stakeFee: isSet(object.stakeFee) ? Coin.fromJSON(object.stakeFee) : undefined,
      yAmountsOut: Array.isArray(object?.yAmountsOut) ? object.yAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      baseAmountIn: isSet(object.baseAmountIn) ? Coin.fromJSON(object.baseAmountIn) : undefined,
      nestedLpt: isSet(object.nestedLpt) ? Coin.fromJSON(object.nestedLpt) : undefined,
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      stakeCAsset: isSet(object.stakeCAsset) ? Coin.fromJSON(object.stakeCAsset) : undefined,
      yammLpt: isSet(object.yammLpt) ? Coin.fromJSON(object.yammLpt) : undefined,
      yammProtocolFee: Array.isArray(object?.yammProtocolFee) ? object.yammProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      yammSwapFee: Array.isArray(object?.yammSwapFee) ? object.yammSwapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: ZeroImpactJoinAssetToNestedResponse): unknown {
    const obj: any = {};
    message.baseAmountToJoin !== undefined && (obj.baseAmountToJoin = message.baseAmountToJoin ? Coin.toJSON(message.baseAmountToJoin) : undefined);
    if (message.nestedProtocolFee) {
      obj.nestedProtocolFee = message.nestedProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.nestedProtocolFee = [];
    }
    if (message.nestedSwapFee) {
      obj.nestedSwapFee = message.nestedSwapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.nestedSwapFee = [];
    }
    message.stakeFee !== undefined && (obj.stakeFee = message.stakeFee ? Coin.toJSON(message.stakeFee) : undefined);
    if (message.yAmountsOut) {
      obj.yAmountsOut = message.yAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yAmountsOut = [];
    }
    message.baseAmountIn !== undefined && (obj.baseAmountIn = message.baseAmountIn ? Coin.toJSON(message.baseAmountIn) : undefined);
    message.nestedLpt !== undefined && (obj.nestedLpt = message.nestedLpt ? Coin.toJSON(message.nestedLpt) : undefined);
    message.refractFee !== undefined && (obj.refractFee = message.refractFee ? Coin.toJSON(message.refractFee) : undefined);
    message.stakeCAsset !== undefined && (obj.stakeCAsset = message.stakeCAsset ? Coin.toJSON(message.stakeCAsset) : undefined);
    message.yammLpt !== undefined && (obj.yammLpt = message.yammLpt ? Coin.toJSON(message.yammLpt) : undefined);
    if (message.yammProtocolFee) {
      obj.yammProtocolFee = message.yammProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yammProtocolFee = [];
    }
    if (message.yammSwapFee) {
      obj.yammSwapFee = message.yammSwapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yammSwapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ZeroImpactJoinAssetToNestedResponse>): ZeroImpactJoinAssetToNestedResponse {
    const message = createBaseZeroImpactJoinAssetToNestedResponse();
    message.baseAmountToJoin = object.baseAmountToJoin !== undefined && object.baseAmountToJoin !== null ? Coin.fromPartial(object.baseAmountToJoin) : undefined;
    message.nestedProtocolFee = object.nestedProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.nestedSwapFee = object.nestedSwapFee?.map(e => Coin.fromPartial(e)) || [];
    message.stakeFee = object.stakeFee !== undefined && object.stakeFee !== null ? Coin.fromPartial(object.stakeFee) : undefined;
    message.yAmountsOut = object.yAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.baseAmountIn = object.baseAmountIn !== undefined && object.baseAmountIn !== null ? Coin.fromPartial(object.baseAmountIn) : undefined;
    message.nestedLpt = object.nestedLpt !== undefined && object.nestedLpt !== null ? Coin.fromPartial(object.nestedLpt) : undefined;
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.stakeCAsset = object.stakeCAsset !== undefined && object.stakeCAsset !== null ? Coin.fromPartial(object.stakeCAsset) : undefined;
    message.yammLpt = object.yammLpt !== undefined && object.yammLpt !== null ? Coin.fromPartial(object.yammLpt) : undefined;
    message.yammProtocolFee = object.yammProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.yammSwapFee = object.yammSwapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ZeroImpactJoinAssetToNestedResponseAmino): ZeroImpactJoinAssetToNestedResponse {
    const message = createBaseZeroImpactJoinAssetToNestedResponse();
    if (object.base_amount_to_join !== undefined && object.base_amount_to_join !== null) {
      message.baseAmountToJoin = Coin.fromAmino(object.base_amount_to_join);
    }
    message.nestedProtocolFee = object.nested_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.nestedSwapFee = object.nested_swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.stake_fee !== undefined && object.stake_fee !== null) {
      message.stakeFee = Coin.fromAmino(object.stake_fee);
    }
    message.yAmountsOut = object.y_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.base_amount_in !== undefined && object.base_amount_in !== null) {
      message.baseAmountIn = Coin.fromAmino(object.base_amount_in);
    }
    if (object.nested_lpt !== undefined && object.nested_lpt !== null) {
      message.nestedLpt = Coin.fromAmino(object.nested_lpt);
    }
    if (object.refract_fee !== undefined && object.refract_fee !== null) {
      message.refractFee = Coin.fromAmino(object.refract_fee);
    }
    if (object.stake_c_asset !== undefined && object.stake_c_asset !== null) {
      message.stakeCAsset = Coin.fromAmino(object.stake_c_asset);
    }
    if (object.yamm_lpt !== undefined && object.yamm_lpt !== null) {
      message.yammLpt = Coin.fromAmino(object.yamm_lpt);
    }
    message.yammProtocolFee = object.yamm_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.yammSwapFee = object.yamm_swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ZeroImpactJoinAssetToNestedResponse, useInterfaces: boolean = true): ZeroImpactJoinAssetToNestedResponseAmino {
    const obj: any = {};
    obj.base_amount_to_join = message.baseAmountToJoin ? Coin.toAmino(message.baseAmountToJoin, useInterfaces) : undefined;
    if (message.nestedProtocolFee) {
      obj.nested_protocol_fee = message.nestedProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.nested_protocol_fee = message.nestedProtocolFee;
    }
    if (message.nestedSwapFee) {
      obj.nested_swap_fee = message.nestedSwapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.nested_swap_fee = message.nestedSwapFee;
    }
    obj.stake_fee = message.stakeFee ? Coin.toAmino(message.stakeFee, useInterfaces) : undefined;
    if (message.yAmountsOut) {
      obj.y_amounts_out = message.yAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_amounts_out = message.yAmountsOut;
    }
    obj.base_amount_in = message.baseAmountIn ? Coin.toAmino(message.baseAmountIn, useInterfaces) : undefined;
    obj.nested_lpt = message.nestedLpt ? Coin.toAmino(message.nestedLpt, useInterfaces) : undefined;
    obj.refract_fee = message.refractFee ? Coin.toAmino(message.refractFee, useInterfaces) : undefined;
    obj.stake_c_asset = message.stakeCAsset ? Coin.toAmino(message.stakeCAsset, useInterfaces) : undefined;
    obj.yamm_lpt = message.yammLpt ? Coin.toAmino(message.yammLpt, useInterfaces) : undefined;
    if (message.yammProtocolFee) {
      obj.yamm_protocol_fee = message.yammProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_protocol_fee = message.yammProtocolFee;
    }
    if (message.yammSwapFee) {
      obj.yamm_swap_fee = message.yammSwapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_swap_fee = message.yammSwapFee;
    }
    return obj;
  },
  fromAminoMsg(object: ZeroImpactJoinAssetToNestedResponseAminoMsg): ZeroImpactJoinAssetToNestedResponse {
    return ZeroImpactJoinAssetToNestedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ZeroImpactJoinAssetToNestedResponseProtoMsg, useInterfaces: boolean = true): ZeroImpactJoinAssetToNestedResponse {
    return ZeroImpactJoinAssetToNestedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ZeroImpactJoinAssetToNestedResponse): Uint8Array {
    return ZeroImpactJoinAssetToNestedResponse.encode(message).finish();
  },
  toProtoMsg(message: ZeroImpactJoinAssetToNestedResponse): ZeroImpactJoinAssetToNestedResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ZeroImpactJoinAssetToNestedResponse",
      value: ZeroImpactJoinAssetToNestedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ZeroImpactJoinAssetToNestedResponse.typeUrl, ZeroImpactJoinAssetToNestedResponse);
function createBaseExecuteMsg_SetStakeContract(): ExecuteMsg_SetStakeContract {
  return {
    contract: StakeContract.fromPartial({})
  };
}
export const ExecuteMsg_SetStakeContract = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_SetStakeContract",
  is(o: any): o is ExecuteMsg_SetStakeContract {
    return o && (o.$typeUrl === ExecuteMsg_SetStakeContract.typeUrl || StakeContract.is(o.contract));
  },
  isSDK(o: any): o is ExecuteMsg_SetStakeContractSDKType {
    return o && (o.$typeUrl === ExecuteMsg_SetStakeContract.typeUrl || StakeContract.isSDK(o.contract));
  },
  isAmino(o: any): o is ExecuteMsg_SetStakeContractAmino {
    return o && (o.$typeUrl === ExecuteMsg_SetStakeContract.typeUrl || StakeContract.isAmino(o.contract));
  },
  encode(message: ExecuteMsg_SetStakeContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      StakeContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_SetStakeContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_SetStakeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = StakeContract.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_SetStakeContract {
    return {
      contract: isSet(object.contract) ? StakeContract.fromJSON(object.contract) : undefined
    };
  },
  toJSON(message: ExecuteMsg_SetStakeContract): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract ? StakeContract.toJSON(message.contract) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_SetStakeContract>): ExecuteMsg_SetStakeContract {
    const message = createBaseExecuteMsg_SetStakeContract();
    message.contract = object.contract !== undefined && object.contract !== null ? StakeContract.fromPartial(object.contract) : undefined;
    return message;
  },
  fromAmino(object: ExecuteMsg_SetStakeContractAmino): ExecuteMsg_SetStakeContract {
    const message = createBaseExecuteMsg_SetStakeContract();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = StakeContract.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: ExecuteMsg_SetStakeContract, useInterfaces: boolean = true): ExecuteMsg_SetStakeContractAmino {
    const obj: any = {};
    obj.contract = message.contract ? StakeContract.toAmino(message.contract, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_SetStakeContractAminoMsg): ExecuteMsg_SetStakeContract {
    return ExecuteMsg_SetStakeContract.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_SetStakeContractProtoMsg, useInterfaces: boolean = true): ExecuteMsg_SetStakeContract {
    return ExecuteMsg_SetStakeContract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_SetStakeContract): Uint8Array {
    return ExecuteMsg_SetStakeContract.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_SetStakeContract): ExecuteMsg_SetStakeContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_SetStakeContract",
      value: ExecuteMsg_SetStakeContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_SetStakeContract.typeUrl, ExecuteMsg_SetStakeContract);
function createBaseBatchSwapStep(): BatchSwapStep {
  return {
    tokenOut: "",
    poolId: BigInt(0),
    tokenIn: ""
  };
}
export const BatchSwapStep = {
  typeUrl: "/pryzmatics.pryzmnexus.BatchSwapStep",
  is(o: any): o is BatchSwapStep {
    return o && (o.$typeUrl === BatchSwapStep.typeUrl || typeof o.tokenOut === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is BatchSwapStepSDKType {
    return o && (o.$typeUrl === BatchSwapStep.typeUrl || typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is BatchSwapStepAmino {
    return o && (o.$typeUrl === BatchSwapStep.typeUrl || typeof o.token_out === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string");
  },
  encode(message: BatchSwapStep, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOut !== "") {
      writer.uint32(10).string(message.tokenOut);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).int64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BatchSwapStep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSwapStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOut = reader.string();
          break;
        case 2:
          message.poolId = reader.int64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchSwapStep {
    return {
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: BatchSwapStep): unknown {
    const obj: any = {};
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<BatchSwapStep>): BatchSwapStep {
    const message = createBaseBatchSwapStep();
    message.tokenOut = object.tokenOut ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: BatchSwapStepAmino): BatchSwapStep {
    const message = createBaseBatchSwapStep();
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: BatchSwapStep, useInterfaces: boolean = true): BatchSwapStepAmino {
    const obj: any = {};
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.pool_id = message.poolId ? message.poolId.toString() : "0";
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: BatchSwapStepAminoMsg): BatchSwapStep {
    return BatchSwapStep.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchSwapStepProtoMsg, useInterfaces: boolean = true): BatchSwapStep {
    return BatchSwapStep.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BatchSwapStep): Uint8Array {
    return BatchSwapStep.encode(message).finish();
  },
  toProtoMsg(message: BatchSwapStep): BatchSwapStepProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.BatchSwapStep",
      value: BatchSwapStep.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchSwapStep.typeUrl, BatchSwapStep);
function createBaseQueryMsg_SimulateZeroImpactJoinAssetToYamm(): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
  return {
    amountIn: Coin.fromPartial({}),
    stakingMethod: StakingMethod.fromPartial({})
  };
}
export const QueryMsg_SimulateZeroImpactJoinAssetToYamm = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToYamm",
  is(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToYamm.typeUrl || Coin.is(o.amountIn) && StakingMethod.is(o.stakingMethod));
  },
  isSDK(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToYammSDKType {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToYamm.typeUrl || Coin.isSDK(o.amount_in) && StakingMethod.isSDK(o.staking_method));
  },
  isAmino(o: any): o is QueryMsg_SimulateZeroImpactJoinAssetToYammAmino {
    return o && (o.$typeUrl === QueryMsg_SimulateZeroImpactJoinAssetToYamm.typeUrl || Coin.isAmino(o.amount_in) && StakingMethod.isAmino(o.staking_method));
  },
  encode(message: QueryMsg_SimulateZeroImpactJoinAssetToYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingMethod !== undefined) {
      StakingMethod.encode(message.stakingMethod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.stakingMethod = StakingMethod.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      stakingMethod: isSet(object.stakingMethod) ? StakingMethod.fromJSON(object.stakingMethod) : undefined
    };
  },
  toJSON(message: QueryMsg_SimulateZeroImpactJoinAssetToYamm): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.stakingMethod !== undefined && (obj.stakingMethod = message.stakingMethod ? StakingMethod.toJSON(message.stakingMethod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMsg_SimulateZeroImpactJoinAssetToYamm>): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToYamm();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.stakingMethod = object.stakingMethod !== undefined && object.stakingMethod !== null ? StakingMethod.fromPartial(object.stakingMethod) : undefined;
    return message;
  },
  fromAmino(object: QueryMsg_SimulateZeroImpactJoinAssetToYammAmino): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    const message = createBaseQueryMsg_SimulateZeroImpactJoinAssetToYamm();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.staking_method !== undefined && object.staking_method !== null) {
      message.stakingMethod = StakingMethod.fromAmino(object.staking_method);
    }
    return message;
  },
  toAmino(message: QueryMsg_SimulateZeroImpactJoinAssetToYamm, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToYammAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.staking_method = message.stakingMethod ? StakingMethod.toAmino(message.stakingMethod, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsg_SimulateZeroImpactJoinAssetToYammAminoMsg): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    return QueryMsg_SimulateZeroImpactJoinAssetToYamm.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_SimulateZeroImpactJoinAssetToYammProtoMsg, useInterfaces: boolean = true): QueryMsg_SimulateZeroImpactJoinAssetToYamm {
    return QueryMsg_SimulateZeroImpactJoinAssetToYamm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_SimulateZeroImpactJoinAssetToYamm): Uint8Array {
    return QueryMsg_SimulateZeroImpactJoinAssetToYamm.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_SimulateZeroImpactJoinAssetToYamm): QueryMsg_SimulateZeroImpactJoinAssetToYammProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_SimulateZeroImpactJoinAssetToYamm",
      value: QueryMsg_SimulateZeroImpactJoinAssetToYamm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_SimulateZeroImpactJoinAssetToYamm.typeUrl, QueryMsg_SimulateZeroImpactJoinAssetToYamm);
function createBaseQueryMsg_StakeContracts(): QueryMsg_StakeContracts {
  return {
    pageRequest: undefined
  };
}
export const QueryMsg_StakeContracts = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContracts",
  is(o: any): o is QueryMsg_StakeContracts {
    return o && o.$typeUrl === QueryMsg_StakeContracts.typeUrl;
  },
  isSDK(o: any): o is QueryMsg_StakeContractsSDKType {
    return o && o.$typeUrl === QueryMsg_StakeContracts.typeUrl;
  },
  isAmino(o: any): o is QueryMsg_StakeContractsAmino {
    return o && o.$typeUrl === QueryMsg_StakeContracts.typeUrl;
  },
  encode(message: QueryMsg_StakeContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pageRequest !== undefined) {
      PageRequest_for_String.encode(message.pageRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_StakeContracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_StakeContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageRequest = PageRequest_for_String.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg_StakeContracts {
    return {
      pageRequest: isSet(object.pageRequest) ? PageRequest_for_String.fromJSON(object.pageRequest) : undefined
    };
  },
  toJSON(message: QueryMsg_StakeContracts): unknown {
    const obj: any = {};
    message.pageRequest !== undefined && (obj.pageRequest = message.pageRequest ? PageRequest_for_String.toJSON(message.pageRequest) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMsg_StakeContracts>): QueryMsg_StakeContracts {
    const message = createBaseQueryMsg_StakeContracts();
    message.pageRequest = object.pageRequest !== undefined && object.pageRequest !== null ? PageRequest_for_String.fromPartial(object.pageRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryMsg_StakeContractsAmino): QueryMsg_StakeContracts {
    const message = createBaseQueryMsg_StakeContracts();
    if (object.page_request !== undefined && object.page_request !== null) {
      message.pageRequest = PageRequest_for_String.fromAmino(object.page_request);
    }
    return message;
  },
  toAmino(message: QueryMsg_StakeContracts, useInterfaces: boolean = true): QueryMsg_StakeContractsAmino {
    const obj: any = {};
    obj.page_request = message.pageRequest ? PageRequest_for_String.toAmino(message.pageRequest, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMsg_StakeContractsAminoMsg): QueryMsg_StakeContracts {
    return QueryMsg_StakeContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_StakeContractsProtoMsg, useInterfaces: boolean = true): QueryMsg_StakeContracts {
    return QueryMsg_StakeContracts.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_StakeContracts): Uint8Array {
    return QueryMsg_StakeContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_StakeContracts): QueryMsg_StakeContractsProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContracts",
      value: QueryMsg_StakeContracts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_StakeContracts.typeUrl, QueryMsg_StakeContracts);
function createBaseBatchResponse(): BatchResponse {
  return {
    amountsOut: [],
    amountsIn: [],
    fees: []
  };
}
export const BatchResponse = {
  typeUrl: "/pryzmatics.pryzmnexus.BatchResponse",
  is(o: any): o is BatchResponse {
    return o && (o.$typeUrl === BatchResponse.typeUrl || Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin.is(o.fees[0])));
  },
  isSDK(o: any): o is BatchResponseSDKType {
    return o && (o.$typeUrl === BatchResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin.isSDK(o.fees[0])));
  },
  isAmino(o: any): o is BatchResponseAmino {
    return o && (o.$typeUrl === BatchResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.fees) && (!o.fees.length || Coin.isAmino(o.fees[0])));
  },
  encode(message: BatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.fees.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchResponse {
    return {
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: BatchResponse): unknown {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromPartial(object: Partial<BatchResponse>): BatchResponse {
    const message = createBaseBatchResponse();
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BatchResponseAmino): BatchResponse {
    const message = createBaseBatchResponse();
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.fees = object.fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchResponse, useInterfaces: boolean = true): BatchResponseAmino {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fees = message.fees;
    }
    return obj;
  },
  fromAminoMsg(object: BatchResponseAminoMsg): BatchResponse {
    return BatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchResponseProtoMsg, useInterfaces: boolean = true): BatchResponse {
    return BatchResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BatchResponse): Uint8Array {
    return BatchResponse.encode(message).finish();
  },
  toProtoMsg(message: BatchResponse): BatchResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.BatchResponse",
      value: BatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchResponse.typeUrl, BatchResponse);
function createBaseExecuteMsg_Pause(): ExecuteMsg_Pause {
  return {};
}
export const ExecuteMsg_Pause = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Pause",
  is(o: any): o is ExecuteMsg_Pause {
    return o && o.$typeUrl === ExecuteMsg_Pause.typeUrl;
  },
  isSDK(o: any): o is ExecuteMsg_PauseSDKType {
    return o && o.$typeUrl === ExecuteMsg_Pause.typeUrl;
  },
  isAmino(o: any): o is ExecuteMsg_PauseAmino {
    return o && o.$typeUrl === ExecuteMsg_Pause.typeUrl;
  },
  encode(_: ExecuteMsg_Pause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_Pause {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_Pause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ExecuteMsg_Pause {
    return {};
  },
  toJSON(_: ExecuteMsg_Pause): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ExecuteMsg_Pause>): ExecuteMsg_Pause {
    const message = createBaseExecuteMsg_Pause();
    return message;
  },
  fromAmino(_: ExecuteMsg_PauseAmino): ExecuteMsg_Pause {
    const message = createBaseExecuteMsg_Pause();
    return message;
  },
  toAmino(_: ExecuteMsg_Pause, useInterfaces: boolean = true): ExecuteMsg_PauseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_PauseAminoMsg): ExecuteMsg_Pause {
    return ExecuteMsg_Pause.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_PauseProtoMsg, useInterfaces: boolean = true): ExecuteMsg_Pause {
    return ExecuteMsg_Pause.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_Pause): Uint8Array {
    return ExecuteMsg_Pause.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_Pause): ExecuteMsg_PauseProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_Pause",
      value: ExecuteMsg_Pause.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_Pause.typeUrl, ExecuteMsg_Pause);
function createBaseExecuteMsg_UpdateAdmin(): ExecuteMsg_UpdateAdmin {
  return {
    address: ""
  };
}
export const ExecuteMsg_UpdateAdmin = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_UpdateAdmin",
  is(o: any): o is ExecuteMsg_UpdateAdmin {
    return o && (o.$typeUrl === ExecuteMsg_UpdateAdmin.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is ExecuteMsg_UpdateAdminSDKType {
    return o && (o.$typeUrl === ExecuteMsg_UpdateAdmin.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is ExecuteMsg_UpdateAdminAmino {
    return o && (o.$typeUrl === ExecuteMsg_UpdateAdmin.typeUrl || typeof o.address === "string");
  },
  encode(message: ExecuteMsg_UpdateAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_UpdateAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_UpdateAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_UpdateAdmin {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: ExecuteMsg_UpdateAdmin): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_UpdateAdmin>): ExecuteMsg_UpdateAdmin {
    const message = createBaseExecuteMsg_UpdateAdmin();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: ExecuteMsg_UpdateAdminAmino): ExecuteMsg_UpdateAdmin {
    const message = createBaseExecuteMsg_UpdateAdmin();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ExecuteMsg_UpdateAdmin, useInterfaces: boolean = true): ExecuteMsg_UpdateAdminAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_UpdateAdminAminoMsg): ExecuteMsg_UpdateAdmin {
    return ExecuteMsg_UpdateAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_UpdateAdminProtoMsg, useInterfaces: boolean = true): ExecuteMsg_UpdateAdmin {
    return ExecuteMsg_UpdateAdmin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_UpdateAdmin): Uint8Array {
    return ExecuteMsg_UpdateAdmin.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_UpdateAdmin): ExecuteMsg_UpdateAdminProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_UpdateAdmin",
      value: ExecuteMsg_UpdateAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_UpdateAdmin.typeUrl, ExecuteMsg_UpdateAdmin);
function createBaseStakingMethod(): StakingMethod {
  return {
    icStaking: undefined,
    contract: undefined
  };
}
export const StakingMethod = {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod",
  is(o: any): o is StakingMethod {
    return o && o.$typeUrl === StakingMethod.typeUrl;
  },
  isSDK(o: any): o is StakingMethodSDKType {
    return o && o.$typeUrl === StakingMethod.typeUrl;
  },
  isAmino(o: any): o is StakingMethodAmino {
    return o && o.$typeUrl === StakingMethod.typeUrl;
  },
  encode(message: StakingMethod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.icStaking !== undefined) {
      StakingMethod_IcStaking.encode(message.icStaking, writer.uint32(10).fork()).ldelim();
    }
    if (message.contract !== undefined) {
      StakingMethod_Contract.encode(message.contract, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakingMethod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.icStaking = StakingMethod_IcStaking.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.contract = StakingMethod_Contract.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakingMethod {
    return {
      icStaking: isSet(object.icStaking) ? StakingMethod_IcStaking.fromJSON(object.icStaking) : undefined,
      contract: isSet(object.contract) ? StakingMethod_Contract.fromJSON(object.contract) : undefined
    };
  },
  toJSON(message: StakingMethod): unknown {
    const obj: any = {};
    message.icStaking !== undefined && (obj.icStaking = message.icStaking ? StakingMethod_IcStaking.toJSON(message.icStaking) : undefined);
    message.contract !== undefined && (obj.contract = message.contract ? StakingMethod_Contract.toJSON(message.contract) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StakingMethod>): StakingMethod {
    const message = createBaseStakingMethod();
    message.icStaking = object.icStaking !== undefined && object.icStaking !== null ? StakingMethod_IcStaking.fromPartial(object.icStaking) : undefined;
    message.contract = object.contract !== undefined && object.contract !== null ? StakingMethod_Contract.fromPartial(object.contract) : undefined;
    return message;
  },
  fromAmino(object: StakingMethodAmino): StakingMethod {
    const message = createBaseStakingMethod();
    if (object.ic_staking !== undefined && object.ic_staking !== null) {
      message.icStaking = StakingMethod_IcStaking.fromAmino(object.ic_staking);
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = StakingMethod_Contract.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: StakingMethod, useInterfaces: boolean = true): StakingMethodAmino {
    const obj: any = {};
    obj.ic_staking = message.icStaking ? StakingMethod_IcStaking.toAmino(message.icStaking, useInterfaces) : undefined;
    obj.contract = message.contract ? StakingMethod_Contract.toAmino(message.contract, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakingMethodAminoMsg): StakingMethod {
    return StakingMethod.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingMethodProtoMsg, useInterfaces: boolean = true): StakingMethod {
    return StakingMethod.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakingMethod): Uint8Array {
    return StakingMethod.encode(message).finish();
  },
  toProtoMsg(message: StakingMethod): StakingMethodProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakingMethod",
      value: StakingMethod.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingMethod.typeUrl, StakingMethod);
function createBaseQueryMsg_StakeContract(): QueryMsg_StakeContract {
  return {
    denom: ""
  };
}
export const QueryMsg_StakeContract = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContract",
  is(o: any): o is QueryMsg_StakeContract {
    return o && (o.$typeUrl === QueryMsg_StakeContract.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryMsg_StakeContractSDKType {
    return o && (o.$typeUrl === QueryMsg_StakeContract.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryMsg_StakeContractAmino {
    return o && (o.$typeUrl === QueryMsg_StakeContract.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryMsg_StakeContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_StakeContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_StakeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMsg_StakeContract {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryMsg_StakeContract): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryMsg_StakeContract>): QueryMsg_StakeContract {
    const message = createBaseQueryMsg_StakeContract();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMsg_StakeContractAmino): QueryMsg_StakeContract {
    const message = createBaseQueryMsg_StakeContract();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMsg_StakeContract, useInterfaces: boolean = true): QueryMsg_StakeContractAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMsg_StakeContractAminoMsg): QueryMsg_StakeContract {
    return QueryMsg_StakeContract.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_StakeContractProtoMsg, useInterfaces: boolean = true): QueryMsg_StakeContract {
    return QueryMsg_StakeContract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_StakeContract): Uint8Array {
    return QueryMsg_StakeContract.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_StakeContract): QueryMsg_StakeContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_StakeContract",
      value: QueryMsg_StakeContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_StakeContract.typeUrl, QueryMsg_StakeContract);
function createBaseQueryMsg_Admin(): QueryMsg_Admin {
  return {};
}
export const QueryMsg_Admin = {
  typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Admin",
  is(o: any): o is QueryMsg_Admin {
    return o && o.$typeUrl === QueryMsg_Admin.typeUrl;
  },
  isSDK(o: any): o is QueryMsg_AdminSDKType {
    return o && o.$typeUrl === QueryMsg_Admin.typeUrl;
  },
  isAmino(o: any): o is QueryMsg_AdminAmino {
    return o && o.$typeUrl === QueryMsg_Admin.typeUrl;
  },
  encode(_: QueryMsg_Admin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMsg_Admin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMsg_Admin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryMsg_Admin {
    return {};
  },
  toJSON(_: QueryMsg_Admin): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMsg_Admin>): QueryMsg_Admin {
    const message = createBaseQueryMsg_Admin();
    return message;
  },
  fromAmino(_: QueryMsg_AdminAmino): QueryMsg_Admin {
    const message = createBaseQueryMsg_Admin();
    return message;
  },
  toAmino(_: QueryMsg_Admin, useInterfaces: boolean = true): QueryMsg_AdminAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMsg_AdminAminoMsg): QueryMsg_Admin {
    return QueryMsg_Admin.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMsg_AdminProtoMsg, useInterfaces: boolean = true): QueryMsg_Admin {
    return QueryMsg_Admin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMsg_Admin): Uint8Array {
    return QueryMsg_Admin.encode(message).finish();
  },
  toProtoMsg(message: QueryMsg_Admin): QueryMsg_AdminProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.QueryMsg_Admin",
      value: QueryMsg_Admin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMsg_Admin.typeUrl, QueryMsg_Admin);
function createBaseExecuteMsg_RemoveStakeContract(): ExecuteMsg_RemoveStakeContract {
  return {
    denom: ""
  };
}
export const ExecuteMsg_RemoveStakeContract = {
  typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_RemoveStakeContract",
  is(o: any): o is ExecuteMsg_RemoveStakeContract {
    return o && (o.$typeUrl === ExecuteMsg_RemoveStakeContract.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is ExecuteMsg_RemoveStakeContractSDKType {
    return o && (o.$typeUrl === ExecuteMsg_RemoveStakeContract.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is ExecuteMsg_RemoveStakeContractAmino {
    return o && (o.$typeUrl === ExecuteMsg_RemoveStakeContract.typeUrl || typeof o.denom === "string");
  },
  encode(message: ExecuteMsg_RemoveStakeContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExecuteMsg_RemoveStakeContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteMsg_RemoveStakeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteMsg_RemoveStakeContract {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: ExecuteMsg_RemoveStakeContract): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<ExecuteMsg_RemoveStakeContract>): ExecuteMsg_RemoveStakeContract {
    const message = createBaseExecuteMsg_RemoveStakeContract();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: ExecuteMsg_RemoveStakeContractAmino): ExecuteMsg_RemoveStakeContract {
    const message = createBaseExecuteMsg_RemoveStakeContract();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: ExecuteMsg_RemoveStakeContract, useInterfaces: boolean = true): ExecuteMsg_RemoveStakeContractAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: ExecuteMsg_RemoveStakeContractAminoMsg): ExecuteMsg_RemoveStakeContract {
    return ExecuteMsg_RemoveStakeContract.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecuteMsg_RemoveStakeContractProtoMsg, useInterfaces: boolean = true): ExecuteMsg_RemoveStakeContract {
    return ExecuteMsg_RemoveStakeContract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteMsg_RemoveStakeContract): Uint8Array {
    return ExecuteMsg_RemoveStakeContract.encode(message).finish();
  },
  toProtoMsg(message: ExecuteMsg_RemoveStakeContract): ExecuteMsg_RemoveStakeContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.ExecuteMsg_RemoveStakeContract",
      value: ExecuteMsg_RemoveStakeContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecuteMsg_RemoveStakeContract.typeUrl, ExecuteMsg_RemoveStakeContract);
function createBaseOperation_BatchSwap(): Operation_BatchSwap {
  return {
    steps: []
  };
}
export const Operation_BatchSwap = {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_BatchSwap",
  is(o: any): o is Operation_BatchSwap {
    return o && (o.$typeUrl === Operation_BatchSwap.typeUrl || Array.isArray(o.steps) && (!o.steps.length || BatchSwapStep.is(o.steps[0])));
  },
  isSDK(o: any): o is Operation_BatchSwapSDKType {
    return o && (o.$typeUrl === Operation_BatchSwap.typeUrl || Array.isArray(o.steps) && (!o.steps.length || BatchSwapStep.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is Operation_BatchSwapAmino {
    return o && (o.$typeUrl === Operation_BatchSwap.typeUrl || Array.isArray(o.steps) && (!o.steps.length || BatchSwapStep.isAmino(o.steps[0])));
  },
  encode(message: Operation_BatchSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      BatchSwapStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Operation_BatchSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_BatchSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(BatchSwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation_BatchSwap {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => BatchSwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: Operation_BatchSwap): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? BatchSwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Operation_BatchSwap>): Operation_BatchSwap {
    const message = createBaseOperation_BatchSwap();
    message.steps = object.steps?.map(e => BatchSwapStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Operation_BatchSwapAmino): Operation_BatchSwap {
    const message = createBaseOperation_BatchSwap();
    message.steps = object.steps?.map(e => BatchSwapStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Operation_BatchSwap, useInterfaces: boolean = true): Operation_BatchSwapAmino {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? BatchSwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: Operation_BatchSwapAminoMsg): Operation_BatchSwap {
    return Operation_BatchSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: Operation_BatchSwapProtoMsg, useInterfaces: boolean = true): Operation_BatchSwap {
    return Operation_BatchSwap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Operation_BatchSwap): Uint8Array {
    return Operation_BatchSwap.encode(message).finish();
  },
  toProtoMsg(message: Operation_BatchSwap): Operation_BatchSwapProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Operation_BatchSwap",
      value: Operation_BatchSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Operation_BatchSwap.typeUrl, Operation_BatchSwap);
function createBaseOperation_Refract(): Operation_Refract {
  return {
    maturitySymbol: "",
    tokenIn: ""
  };
}
export const Operation_Refract = {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Refract",
  is(o: any): o is Operation_Refract {
    return o && (o.$typeUrl === Operation_Refract.typeUrl || typeof o.maturitySymbol === "string" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is Operation_RefractSDKType {
    return o && (o.$typeUrl === Operation_Refract.typeUrl || typeof o.maturity_symbol === "string" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is Operation_RefractAmino {
    return o && (o.$typeUrl === Operation_Refract.typeUrl || typeof o.maturity_symbol === "string" && typeof o.token_in === "string");
  },
  encode(message: Operation_Refract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturitySymbol !== "") {
      writer.uint32(10).string(message.maturitySymbol);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Operation_Refract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_Refract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturitySymbol = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation_Refract {
    return {
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: Operation_Refract): unknown {
    const obj: any = {};
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<Operation_Refract>): Operation_Refract {
    const message = createBaseOperation_Refract();
    message.maturitySymbol = object.maturitySymbol ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: Operation_RefractAmino): Operation_Refract {
    const message = createBaseOperation_Refract();
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: Operation_Refract, useInterfaces: boolean = true): Operation_RefractAmino {
    const obj: any = {};
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: Operation_RefractAminoMsg): Operation_Refract {
    return Operation_Refract.fromAmino(object.value);
  },
  fromProtoMsg(message: Operation_RefractProtoMsg, useInterfaces: boolean = true): Operation_Refract {
    return Operation_Refract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Operation_Refract): Uint8Array {
    return Operation_Refract.encode(message).finish();
  },
  toProtoMsg(message: Operation_Refract): Operation_RefractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Operation_Refract",
      value: Operation_Refract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Operation_Refract.typeUrl, Operation_Refract);
function createBaseOperation_Redeem(): Operation_Redeem {
  return {
    pAssetDenom: "",
    yAssetDenom: ""
  };
}
export const Operation_Redeem = {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Redeem",
  is(o: any): o is Operation_Redeem {
    return o && (o.$typeUrl === Operation_Redeem.typeUrl || typeof o.pAssetDenom === "string" && typeof o.yAssetDenom === "string");
  },
  isSDK(o: any): o is Operation_RedeemSDKType {
    return o && (o.$typeUrl === Operation_Redeem.typeUrl || typeof o.p_asset_denom === "string" && typeof o.y_asset_denom === "string");
  },
  isAmino(o: any): o is Operation_RedeemAmino {
    return o && (o.$typeUrl === Operation_Redeem.typeUrl || typeof o.p_asset_denom === "string" && typeof o.y_asset_denom === "string");
  },
  encode(message: Operation_Redeem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pAssetDenom !== "") {
      writer.uint32(10).string(message.pAssetDenom);
    }
    if (message.yAssetDenom !== "") {
      writer.uint32(18).string(message.yAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Operation_Redeem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_Redeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pAssetDenom = reader.string();
          break;
        case 2:
          message.yAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation_Redeem {
    return {
      pAssetDenom: isSet(object.pAssetDenom) ? String(object.pAssetDenom) : "",
      yAssetDenom: isSet(object.yAssetDenom) ? String(object.yAssetDenom) : ""
    };
  },
  toJSON(message: Operation_Redeem): unknown {
    const obj: any = {};
    message.pAssetDenom !== undefined && (obj.pAssetDenom = message.pAssetDenom);
    message.yAssetDenom !== undefined && (obj.yAssetDenom = message.yAssetDenom);
    return obj;
  },
  fromPartial(object: Partial<Operation_Redeem>): Operation_Redeem {
    const message = createBaseOperation_Redeem();
    message.pAssetDenom = object.pAssetDenom ?? "";
    message.yAssetDenom = object.yAssetDenom ?? "";
    return message;
  },
  fromAmino(object: Operation_RedeemAmino): Operation_Redeem {
    const message = createBaseOperation_Redeem();
    if (object.p_asset_denom !== undefined && object.p_asset_denom !== null) {
      message.pAssetDenom = object.p_asset_denom;
    }
    if (object.y_asset_denom !== undefined && object.y_asset_denom !== null) {
      message.yAssetDenom = object.y_asset_denom;
    }
    return message;
  },
  toAmino(message: Operation_Redeem, useInterfaces: boolean = true): Operation_RedeemAmino {
    const obj: any = {};
    obj.p_asset_denom = message.pAssetDenom === "" ? undefined : message.pAssetDenom;
    obj.y_asset_denom = message.yAssetDenom === "" ? undefined : message.yAssetDenom;
    return obj;
  },
  fromAminoMsg(object: Operation_RedeemAminoMsg): Operation_Redeem {
    return Operation_Redeem.fromAmino(object.value);
  },
  fromProtoMsg(message: Operation_RedeemProtoMsg, useInterfaces: boolean = true): Operation_Redeem {
    return Operation_Redeem.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Operation_Redeem): Uint8Array {
    return Operation_Redeem.encode(message).finish();
  },
  toProtoMsg(message: Operation_Redeem): Operation_RedeemProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Operation_Redeem",
      value: Operation_Redeem.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Operation_Redeem.typeUrl, Operation_Redeem);
function createBaseOperation_Stake(): Operation_Stake {
  return {
    stakingMethod: StakingMethod.fromPartial({}),
    tokenIn: ""
  };
}
export const Operation_Stake = {
  typeUrl: "/pryzmatics.pryzmnexus.Operation_Stake",
  is(o: any): o is Operation_Stake {
    return o && (o.$typeUrl === Operation_Stake.typeUrl || StakingMethod.is(o.stakingMethod) && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is Operation_StakeSDKType {
    return o && (o.$typeUrl === Operation_Stake.typeUrl || StakingMethod.isSDK(o.staking_method) && typeof o.token_in === "string");
  },
  isAmino(o: any): o is Operation_StakeAmino {
    return o && (o.$typeUrl === Operation_Stake.typeUrl || StakingMethod.isAmino(o.staking_method) && typeof o.token_in === "string");
  },
  encode(message: Operation_Stake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingMethod !== undefined) {
      StakingMethod.encode(message.stakingMethod, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Operation_Stake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_Stake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingMethod = StakingMethod.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation_Stake {
    return {
      stakingMethod: isSet(object.stakingMethod) ? StakingMethod.fromJSON(object.stakingMethod) : undefined,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: Operation_Stake): unknown {
    const obj: any = {};
    message.stakingMethod !== undefined && (obj.stakingMethod = message.stakingMethod ? StakingMethod.toJSON(message.stakingMethod) : undefined);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<Operation_Stake>): Operation_Stake {
    const message = createBaseOperation_Stake();
    message.stakingMethod = object.stakingMethod !== undefined && object.stakingMethod !== null ? StakingMethod.fromPartial(object.stakingMethod) : undefined;
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: Operation_StakeAmino): Operation_Stake {
    const message = createBaseOperation_Stake();
    if (object.staking_method !== undefined && object.staking_method !== null) {
      message.stakingMethod = StakingMethod.fromAmino(object.staking_method);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: Operation_Stake, useInterfaces: boolean = true): Operation_StakeAmino {
    const obj: any = {};
    obj.staking_method = message.stakingMethod ? StakingMethod.toAmino(message.stakingMethod, useInterfaces) : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: Operation_StakeAminoMsg): Operation_Stake {
    return Operation_Stake.fromAmino(object.value);
  },
  fromProtoMsg(message: Operation_StakeProtoMsg, useInterfaces: boolean = true): Operation_Stake {
    return Operation_Stake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Operation_Stake): Uint8Array {
    return Operation_Stake.encode(message).finish();
  },
  toProtoMsg(message: Operation_Stake): Operation_StakeProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.Operation_Stake",
      value: Operation_Stake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Operation_Stake.typeUrl, Operation_Stake);
function createBaseStakingMethod_IcStaking(): StakingMethod_IcStaking {
  return {
    transferChannel: "",
    hostChainId: ""
  };
}
export const StakingMethod_IcStaking = {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_IcStaking",
  is(o: any): o is StakingMethod_IcStaking {
    return o && (o.$typeUrl === StakingMethod_IcStaking.typeUrl || typeof o.transferChannel === "string" && typeof o.hostChainId === "string");
  },
  isSDK(o: any): o is StakingMethod_IcStakingSDKType {
    return o && (o.$typeUrl === StakingMethod_IcStaking.typeUrl || typeof o.transfer_channel === "string" && typeof o.host_chain_id === "string");
  },
  isAmino(o: any): o is StakingMethod_IcStakingAmino {
    return o && (o.$typeUrl === StakingMethod_IcStaking.typeUrl || typeof o.transfer_channel === "string" && typeof o.host_chain_id === "string");
  },
  encode(message: StakingMethod_IcStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferChannel !== "") {
      writer.uint32(10).string(message.transferChannel);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakingMethod_IcStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingMethod_IcStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferChannel = reader.string();
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakingMethod_IcStaking {
    return {
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : ""
    };
  },
  toJSON(message: StakingMethod_IcStaking): unknown {
    const obj: any = {};
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    return obj;
  },
  fromPartial(object: Partial<StakingMethod_IcStaking>): StakingMethod_IcStaking {
    const message = createBaseStakingMethod_IcStaking();
    message.transferChannel = object.transferChannel ?? "";
    message.hostChainId = object.hostChainId ?? "";
    return message;
  },
  fromAmino(object: StakingMethod_IcStakingAmino): StakingMethod_IcStaking {
    const message = createBaseStakingMethod_IcStaking();
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    return message;
  },
  toAmino(message: StakingMethod_IcStaking, useInterfaces: boolean = true): StakingMethod_IcStakingAmino {
    const obj: any = {};
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    return obj;
  },
  fromAminoMsg(object: StakingMethod_IcStakingAminoMsg): StakingMethod_IcStaking {
    return StakingMethod_IcStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingMethod_IcStakingProtoMsg, useInterfaces: boolean = true): StakingMethod_IcStaking {
    return StakingMethod_IcStaking.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakingMethod_IcStaking): Uint8Array {
    return StakingMethod_IcStaking.encode(message).finish();
  },
  toProtoMsg(message: StakingMethod_IcStaking): StakingMethod_IcStakingProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_IcStaking",
      value: StakingMethod_IcStaking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingMethod_IcStaking.typeUrl, StakingMethod_IcStaking);
function createBaseStakingMethod_Contract(): StakingMethod_Contract {
  return {};
}
export const StakingMethod_Contract = {
  typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_Contract",
  is(o: any): o is StakingMethod_Contract {
    return o && o.$typeUrl === StakingMethod_Contract.typeUrl;
  },
  isSDK(o: any): o is StakingMethod_ContractSDKType {
    return o && o.$typeUrl === StakingMethod_Contract.typeUrl;
  },
  isAmino(o: any): o is StakingMethod_ContractAmino {
    return o && o.$typeUrl === StakingMethod_Contract.typeUrl;
  },
  encode(_: StakingMethod_Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakingMethod_Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingMethod_Contract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): StakingMethod_Contract {
    return {};
  },
  toJSON(_: StakingMethod_Contract): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<StakingMethod_Contract>): StakingMethod_Contract {
    const message = createBaseStakingMethod_Contract();
    return message;
  },
  fromAmino(_: StakingMethod_ContractAmino): StakingMethod_Contract {
    const message = createBaseStakingMethod_Contract();
    return message;
  },
  toAmino(_: StakingMethod_Contract, useInterfaces: boolean = true): StakingMethod_ContractAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StakingMethod_ContractAminoMsg): StakingMethod_Contract {
    return StakingMethod_Contract.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingMethod_ContractProtoMsg, useInterfaces: boolean = true): StakingMethod_Contract {
    return StakingMethod_Contract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakingMethod_Contract): Uint8Array {
    return StakingMethod_Contract.encode(message).finish();
  },
  toProtoMsg(message: StakingMethod_Contract): StakingMethod_ContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pryzmnexus.StakingMethod_Contract",
      value: StakingMethod_Contract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingMethod_Contract.typeUrl, StakingMethod_Contract);