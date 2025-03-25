import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenAmino, TokenSDKType } from "../../pool/token";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryPortfolioRequest {
  address: string;
}
export interface QueryPortfolioRequestProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest";
  value: Uint8Array;
}
export interface QueryPortfolioRequestAmino {
  address?: string;
}
export interface QueryPortfolioRequestAminoMsg {
  type: "/pryzmatics.server.portfolio.QueryPortfolioRequest";
  value: QueryPortfolioRequestAmino;
}
export interface QueryPortfolioRequestSDKType {
  address: string;
}
export interface PortfolioToken {
  amount: Coin;
  valueInStableCoinTerms?: string;
  valueInUnderlyingTerms?: string;
  token?: Token;
}
export interface PortfolioTokenProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioToken";
  value: Uint8Array;
}
export interface PortfolioTokenAmino {
  amount?: CoinAmino;
  value_in_stable_coin_terms?: string;
  value_in_underlying_terms?: string;
  token?: TokenAmino;
}
export interface PortfolioTokenAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioToken";
  value: PortfolioTokenAmino;
}
export interface PortfolioTokenSDKType {
  amount: CoinSDKType;
  value_in_stable_coin_terms?: string;
  value_in_underlying_terms?: string;
  token?: TokenSDKType;
}
export interface PortfolioYStaking {
  reward: Coin;
  token: PortfolioToken;
}
export interface PortfolioYStakingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioYStaking";
  value: Uint8Array;
}
export interface PortfolioYStakingAmino {
  reward?: CoinAmino;
  token?: PortfolioTokenAmino;
}
export interface PortfolioYStakingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioYStaking";
  value: PortfolioYStakingAmino;
}
export interface PortfolioYStakingSDKType {
  reward: CoinSDKType;
  token: PortfolioTokenSDKType;
}
export interface PortfolioYLaunchStaking {
  reward: DecCoin;
  token: PortfolioToken;
}
export interface PortfolioYLaunchStakingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioYLaunchStaking";
  value: Uint8Array;
}
export interface PortfolioYLaunchStakingAmino {
  reward?: DecCoinAmino;
  token?: PortfolioTokenAmino;
}
export interface PortfolioYLaunchStakingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioYLaunchStaking";
  value: PortfolioYLaunchStakingAmino;
}
export interface PortfolioYLaunchStakingSDKType {
  reward: DecCoinSDKType;
  token: PortfolioTokenSDKType;
}
export interface PortfolioStakingDelegation {
  validatorAddress: string;
  rewards: DecCoin[];
  shares: string;
  token: PortfolioToken;
  validatorMoniker: string;
}
export interface PortfolioStakingDelegationProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingDelegation";
  value: Uint8Array;
}
export interface PortfolioStakingDelegationAmino {
  validator_address?: string;
  rewards?: DecCoinAmino[];
  shares?: string;
  token?: PortfolioTokenAmino;
  validator_moniker?: string;
}
export interface PortfolioStakingDelegationAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioStakingDelegation";
  value: PortfolioStakingDelegationAmino;
}
export interface PortfolioStakingDelegationSDKType {
  validator_address: string;
  rewards: DecCoinSDKType[];
  shares: string;
  token: PortfolioTokenSDKType;
  validator_moniker: string;
}
export interface PortfolioStakingUnbonding {
  validatorAddress: string;
  completionTime: Timestamp;
  unbondingId: bigint;
  token: PortfolioToken;
  validatorMoniker: string;
}
export interface PortfolioStakingUnbondingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingUnbonding";
  value: Uint8Array;
}
export interface PortfolioStakingUnbondingAmino {
  validator_address?: string;
  completion_time?: string;
  unbonding_id?: string;
  token?: PortfolioTokenAmino;
  validator_moniker?: string;
}
export interface PortfolioStakingUnbondingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioStakingUnbonding";
  value: PortfolioStakingUnbondingAmino;
}
export interface PortfolioStakingUnbondingSDKType {
  validator_address: string;
  completion_time: TimestampSDKType;
  unbonding_id: bigint;
  token: PortfolioTokenSDKType;
  validator_moniker: string;
}
export interface PortfolioIncentivesBond {
  rewards: Coin[];
  token: PortfolioToken;
}
export interface PortfolioIncentivesBondProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesBond";
  value: Uint8Array;
}
export interface PortfolioIncentivesBondAmino {
  rewards?: CoinAmino[];
  token?: PortfolioTokenAmino;
}
export interface PortfolioIncentivesBondAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioIncentivesBond";
  value: PortfolioIncentivesBondAmino;
}
export interface PortfolioIncentivesBondSDKType {
  rewards: CoinSDKType[];
  token: PortfolioTokenSDKType;
}
export interface PortfolioIncentivesUnbonding {
  completionTime: Timestamp;
  unbondingId: bigint;
  autoClaim: boolean;
  token: PortfolioToken;
}
export interface PortfolioIncentivesUnbondingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesUnbonding";
  value: Uint8Array;
}
export interface PortfolioIncentivesUnbondingAmino {
  completion_time?: string;
  unbonding_id?: string;
  auto_claim?: boolean;
  token?: PortfolioTokenAmino;
}
export interface PortfolioIncentivesUnbondingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioIncentivesUnbonding";
  value: PortfolioIncentivesUnbondingAmino;
}
export interface PortfolioIncentivesUnbondingSDKType {
  completion_time: TimestampSDKType;
  unbonding_id: bigint;
  auto_claim: boolean;
  token: PortfolioTokenSDKType;
}
export interface PortfolioAllianceDelegation {
  validatorAddress: string;
  rewards: Coin[];
  shares: string;
  token: PortfolioToken;
  validatorMoniker: string;
}
export interface PortfolioAllianceDelegationProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceDelegation";
  value: Uint8Array;
}
export interface PortfolioAllianceDelegationAmino {
  validator_address?: string;
  rewards?: CoinAmino[];
  shares?: string;
  token?: PortfolioTokenAmino;
  validator_moniker?: string;
}
export interface PortfolioAllianceDelegationAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioAllianceDelegation";
  value: PortfolioAllianceDelegationAmino;
}
export interface PortfolioAllianceDelegationSDKType {
  validator_address: string;
  rewards: CoinSDKType[];
  shares: string;
  token: PortfolioTokenSDKType;
  validator_moniker: string;
}
export interface PortfolioAllianceUnbonding {
  validatorAddress: string;
  completionTime: Timestamp;
  token: PortfolioToken;
  validatorMoniker: string;
}
export interface PortfolioAllianceUnbondingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceUnbonding";
  value: Uint8Array;
}
export interface PortfolioAllianceUnbondingAmino {
  validator_address?: string;
  completion_time?: string;
  token?: PortfolioTokenAmino;
  validator_moniker?: string;
}
export interface PortfolioAllianceUnbondingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioAllianceUnbonding";
  value: PortfolioAllianceUnbondingAmino;
}
export interface PortfolioAllianceUnbondingSDKType {
  validator_address: string;
  completion_time: TimestampSDKType;
  token: PortfolioTokenSDKType;
  validator_moniker: string;
}
export interface PortfolioIcstakingUnbonding {
  hostChainId: string;
  epoch: bigint;
  transferChannel: string;
  received: boolean;
  completionTime: Timestamp;
  exchangeRate: string;
  token: PortfolioToken;
}
export interface PortfolioIcstakingUnbondingProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIcstakingUnbonding";
  value: Uint8Array;
}
export interface PortfolioIcstakingUnbondingAmino {
  host_chain_id?: string;
  epoch?: string;
  transfer_channel?: string;
  received?: boolean;
  completion_time?: string;
  exchange_rate?: string;
  token?: PortfolioTokenAmino;
}
export interface PortfolioIcstakingUnbondingAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioIcstakingUnbonding";
  value: PortfolioIcstakingUnbondingAmino;
}
export interface PortfolioIcstakingUnbondingSDKType {
  host_chain_id: string;
  epoch: bigint;
  transfer_channel: string;
  received: boolean;
  completion_time: TimestampSDKType;
  exchange_rate: string;
  token: PortfolioTokenSDKType;
}
export interface QueryPortfolioResponse {
  walletTokens: PortfolioToken[];
  yStakings: PortfolioYStaking[];
  yLaunchStakings: PortfolioYLaunchStaking[];
  pGovStakedTokens: PortfolioToken[];
  stakingDelegations: PortfolioStakingDelegation[];
  stakingUnbondings: PortfolioStakingUnbonding[];
  incentivesBonds: PortfolioIncentivesBond[];
  incentivesUnbondings: PortfolioIncentivesUnbonding[];
  allianceDelegations: PortfolioAllianceDelegation[];
  allianceUnbondings: PortfolioAllianceUnbonding[];
  icstakingUnbondings: PortfolioIcstakingUnbonding[];
  walletTokensValueInStableCoinTerms: string;
  yStakingsValueInStableCoinTerms: string;
  yLaunchStakingsValueInStableCoinTerms: string;
  pGovTokensValueInStableCoinTerms: string;
  stakingDelegationsValueInStableCoinTerms: string;
  stakingUnbondingsValueInStableCoinTerms: string;
  incentivesBondsValueInStableCoinTerms: string;
  incentivesUnbondingsValueInStableCoinTerms: string;
  allianceDelegationsValueInStableCoinTerms: string;
  allianceUnbondingsValueInStableCoinTerms: string;
  icstakingUnbondingsValueInStableCoinTerms: string;
  /** sum of the values of all assets in wallet, bonded, or unbonded */
  totalValueInStableCoinTerms: string;
  /** sum of the values of all assets in wallet or bonded */
  totalExcludingUnbondingValueInStableCoinTerms: string;
  /** sum of the values of all bonding/delegation rewards to be claimed */
  rewardsValueInStableCoinTerms: string;
}
export interface QueryPortfolioResponseProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse";
  value: Uint8Array;
}
export interface QueryPortfolioResponseAmino {
  wallet_tokens?: PortfolioTokenAmino[];
  y_stakings?: PortfolioYStakingAmino[];
  y_launch_stakings?: PortfolioYLaunchStakingAmino[];
  p_gov_staked_tokens?: PortfolioTokenAmino[];
  staking_delegations?: PortfolioStakingDelegationAmino[];
  staking_unbondings?: PortfolioStakingUnbondingAmino[];
  incentives_bonds?: PortfolioIncentivesBondAmino[];
  incentives_unbondings?: PortfolioIncentivesUnbondingAmino[];
  alliance_delegations?: PortfolioAllianceDelegationAmino[];
  alliance_unbondings?: PortfolioAllianceUnbondingAmino[];
  icstaking_unbondings?: PortfolioIcstakingUnbondingAmino[];
  wallet_tokens_value_in_stable_coin_terms?: string;
  y_stakings_value_in_stable_coin_terms?: string;
  y_launch_stakings_value_in_stable_coin_terms?: string;
  p_gov_tokens_value_in_stable_coin_terms?: string;
  staking_delegations_value_in_stable_coin_terms?: string;
  staking_unbondings_value_in_stable_coin_terms?: string;
  incentives_bonds_value_in_stable_coin_terms?: string;
  incentives_unbondings_value_in_stable_coin_terms?: string;
  alliance_delegations_value_in_stable_coin_terms?: string;
  alliance_unbondings_value_in_stable_coin_terms?: string;
  icstaking_unbondings_value_in_stable_coin_terms?: string;
  /** sum of the values of all assets in wallet, bonded, or unbonded */
  total_value_in_stable_coin_terms?: string;
  /** sum of the values of all assets in wallet or bonded */
  total_excluding_unbonding_value_in_stable_coin_terms?: string;
  /** sum of the values of all bonding/delegation rewards to be claimed */
  rewards_value_in_stable_coin_terms?: string;
}
export interface QueryPortfolioResponseAminoMsg {
  type: "/pryzmatics.server.portfolio.QueryPortfolioResponse";
  value: QueryPortfolioResponseAmino;
}
export interface QueryPortfolioResponseSDKType {
  wallet_tokens: PortfolioTokenSDKType[];
  y_stakings: PortfolioYStakingSDKType[];
  y_launch_stakings: PortfolioYLaunchStakingSDKType[];
  p_gov_staked_tokens: PortfolioTokenSDKType[];
  staking_delegations: PortfolioStakingDelegationSDKType[];
  staking_unbondings: PortfolioStakingUnbondingSDKType[];
  incentives_bonds: PortfolioIncentivesBondSDKType[];
  incentives_unbondings: PortfolioIncentivesUnbondingSDKType[];
  alliance_delegations: PortfolioAllianceDelegationSDKType[];
  alliance_unbondings: PortfolioAllianceUnbondingSDKType[];
  icstaking_unbondings: PortfolioIcstakingUnbondingSDKType[];
  wallet_tokens_value_in_stable_coin_terms: string;
  y_stakings_value_in_stable_coin_terms: string;
  y_launch_stakings_value_in_stable_coin_terms: string;
  p_gov_tokens_value_in_stable_coin_terms: string;
  staking_delegations_value_in_stable_coin_terms: string;
  staking_unbondings_value_in_stable_coin_terms: string;
  incentives_bonds_value_in_stable_coin_terms: string;
  incentives_unbondings_value_in_stable_coin_terms: string;
  alliance_delegations_value_in_stable_coin_terms: string;
  alliance_unbondings_value_in_stable_coin_terms: string;
  icstaking_unbondings_value_in_stable_coin_terms: string;
  total_value_in_stable_coin_terms: string;
  total_excluding_unbonding_value_in_stable_coin_terms: string;
  rewards_value_in_stable_coin_terms: string;
}
function createBaseQueryPortfolioRequest(): QueryPortfolioRequest {
  return {
    address: ""
  };
}
export const QueryPortfolioRequest = {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest",
  is(o: any): o is QueryPortfolioRequest {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryPortfolioRequestSDKType {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryPortfolioRequestAmino {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryPortfolioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPortfolioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPortfolioRequest();
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
  fromJSON(object: any): QueryPortfolioRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryPortfolioRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryPortfolioRequest>): QueryPortfolioRequest {
    const message = createBaseQueryPortfolioRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryPortfolioRequestAmino): QueryPortfolioRequest {
    const message = createBaseQueryPortfolioRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPortfolioRequest, useInterfaces: boolean = true): QueryPortfolioRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPortfolioRequestAminoMsg): QueryPortfolioRequest {
    return QueryPortfolioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPortfolioRequestProtoMsg, useInterfaces: boolean = true): QueryPortfolioRequest {
    return QueryPortfolioRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPortfolioRequest): Uint8Array {
    return QueryPortfolioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPortfolioRequest): QueryPortfolioRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest",
      value: QueryPortfolioRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPortfolioRequest.typeUrl, QueryPortfolioRequest);
function createBasePortfolioToken(): PortfolioToken {
  return {
    amount: Coin.fromPartial({}),
    valueInStableCoinTerms: undefined,
    valueInUnderlyingTerms: undefined,
    token: undefined
  };
}
export const PortfolioToken = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioToken",
  is(o: any): o is PortfolioToken {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is PortfolioTokenSDKType {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is PortfolioTokenAmino {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: PortfolioToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueInStableCoinTerms !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.valueInStableCoinTerms, 18).atomics);
    }
    if (message.valueInUnderlyingTerms !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.valueInUnderlyingTerms, 18).atomics);
    }
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.valueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.valueInUnderlyingTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.token = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioToken {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      valueInStableCoinTerms: isSet(object.valueInStableCoinTerms) ? String(object.valueInStableCoinTerms) : undefined,
      valueInUnderlyingTerms: isSet(object.valueInUnderlyingTerms) ? String(object.valueInUnderlyingTerms) : undefined,
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioToken): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.valueInStableCoinTerms !== undefined && (obj.valueInStableCoinTerms = message.valueInStableCoinTerms);
    message.valueInUnderlyingTerms !== undefined && (obj.valueInUnderlyingTerms = message.valueInUnderlyingTerms);
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioToken>): PortfolioToken {
    const message = createBasePortfolioToken();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.valueInStableCoinTerms = object.valueInStableCoinTerms ?? undefined;
    message.valueInUnderlyingTerms = object.valueInUnderlyingTerms ?? undefined;
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioTokenAmino): PortfolioToken {
    const message = createBasePortfolioToken();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.value_in_stable_coin_terms !== undefined && object.value_in_stable_coin_terms !== null) {
      message.valueInStableCoinTerms = object.value_in_stable_coin_terms;
    }
    if (object.value_in_underlying_terms !== undefined && object.value_in_underlying_terms !== null) {
      message.valueInUnderlyingTerms = object.value_in_underlying_terms;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioToken, useInterfaces: boolean = true): PortfolioTokenAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.value_in_stable_coin_terms = padDecimal(message.valueInStableCoinTerms) === null ? undefined : padDecimal(message.valueInStableCoinTerms);
    obj.value_in_underlying_terms = padDecimal(message.valueInUnderlyingTerms) === null ? undefined : padDecimal(message.valueInUnderlyingTerms);
    obj.token = message.token ? Token.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioTokenAminoMsg): PortfolioToken {
    return PortfolioToken.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioTokenProtoMsg, useInterfaces: boolean = true): PortfolioToken {
    return PortfolioToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioToken): Uint8Array {
    return PortfolioToken.encode(message).finish();
  },
  toProtoMsg(message: PortfolioToken): PortfolioTokenProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioToken",
      value: PortfolioToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioToken.typeUrl, PortfolioToken);
function createBasePortfolioYStaking(): PortfolioYStaking {
  return {
    reward: Coin.fromPartial({}),
    token: PortfolioToken.fromPartial({})
  };
}
export const PortfolioYStaking = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioYStaking",
  is(o: any): o is PortfolioYStaking {
    return o && (o.$typeUrl === PortfolioYStaking.typeUrl || Coin.is(o.reward) && PortfolioToken.is(o.token));
  },
  isSDK(o: any): o is PortfolioYStakingSDKType {
    return o && (o.$typeUrl === PortfolioYStaking.typeUrl || Coin.isSDK(o.reward) && PortfolioToken.isSDK(o.token));
  },
  isAmino(o: any): o is PortfolioYStakingAmino {
    return o && (o.$typeUrl === PortfolioYStaking.typeUrl || Coin.isAmino(o.reward) && PortfolioToken.isAmino(o.token));
  },
  encode(message: PortfolioYStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioYStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioYStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioYStaking {
    return {
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioYStaking): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioYStaking>): PortfolioYStaking {
    const message = createBasePortfolioYStaking();
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioYStakingAmino): PortfolioYStaking {
    const message = createBasePortfolioYStaking();
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = Coin.fromAmino(object.reward);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioYStaking, useInterfaces: boolean = true): PortfolioYStakingAmino {
    const obj: any = {};
    obj.reward = message.reward ? Coin.toAmino(message.reward, useInterfaces) : undefined;
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioYStakingAminoMsg): PortfolioYStaking {
    return PortfolioYStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioYStakingProtoMsg, useInterfaces: boolean = true): PortfolioYStaking {
    return PortfolioYStaking.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioYStaking): Uint8Array {
    return PortfolioYStaking.encode(message).finish();
  },
  toProtoMsg(message: PortfolioYStaking): PortfolioYStakingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioYStaking",
      value: PortfolioYStaking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioYStaking.typeUrl, PortfolioYStaking);
function createBasePortfolioYLaunchStaking(): PortfolioYLaunchStaking {
  return {
    reward: DecCoin.fromPartial({}),
    token: PortfolioToken.fromPartial({})
  };
}
export const PortfolioYLaunchStaking = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioYLaunchStaking",
  is(o: any): o is PortfolioYLaunchStaking {
    return o && (o.$typeUrl === PortfolioYLaunchStaking.typeUrl || DecCoin.is(o.reward) && PortfolioToken.is(o.token));
  },
  isSDK(o: any): o is PortfolioYLaunchStakingSDKType {
    return o && (o.$typeUrl === PortfolioYLaunchStaking.typeUrl || DecCoin.isSDK(o.reward) && PortfolioToken.isSDK(o.token));
  },
  isAmino(o: any): o is PortfolioYLaunchStakingAmino {
    return o && (o.$typeUrl === PortfolioYLaunchStaking.typeUrl || DecCoin.isAmino(o.reward) && PortfolioToken.isAmino(o.token));
  },
  encode(message: PortfolioYLaunchStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reward !== undefined) {
      DecCoin.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioYLaunchStaking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioYLaunchStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = DecCoin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioYLaunchStaking {
    return {
      reward: isSet(object.reward) ? DecCoin.fromJSON(object.reward) : undefined,
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioYLaunchStaking): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? DecCoin.toJSON(message.reward) : undefined);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioYLaunchStaking>): PortfolioYLaunchStaking {
    const message = createBasePortfolioYLaunchStaking();
    message.reward = object.reward !== undefined && object.reward !== null ? DecCoin.fromPartial(object.reward) : undefined;
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioYLaunchStakingAmino): PortfolioYLaunchStaking {
    const message = createBasePortfolioYLaunchStaking();
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = DecCoin.fromAmino(object.reward);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioYLaunchStaking, useInterfaces: boolean = true): PortfolioYLaunchStakingAmino {
    const obj: any = {};
    obj.reward = message.reward ? DecCoin.toAmino(message.reward, useInterfaces) : undefined;
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioYLaunchStakingAminoMsg): PortfolioYLaunchStaking {
    return PortfolioYLaunchStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioYLaunchStakingProtoMsg, useInterfaces: boolean = true): PortfolioYLaunchStaking {
    return PortfolioYLaunchStaking.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioYLaunchStaking): Uint8Array {
    return PortfolioYLaunchStaking.encode(message).finish();
  },
  toProtoMsg(message: PortfolioYLaunchStaking): PortfolioYLaunchStakingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioYLaunchStaking",
      value: PortfolioYLaunchStaking.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioYLaunchStaking.typeUrl, PortfolioYLaunchStaking);
function createBasePortfolioStakingDelegation(): PortfolioStakingDelegation {
  return {
    validatorAddress: "",
    rewards: [],
    shares: "",
    token: PortfolioToken.fromPartial({}),
    validatorMoniker: ""
  };
}
export const PortfolioStakingDelegation = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingDelegation",
  is(o: any): o is PortfolioStakingDelegation {
    return o && (o.$typeUrl === PortfolioStakingDelegation.typeUrl || typeof o.validatorAddress === "string" && Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.is(o.token) && typeof o.validatorMoniker === "string");
  },
  isSDK(o: any): o is PortfolioStakingDelegationSDKType {
    return o && (o.$typeUrl === PortfolioStakingDelegation.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isSDK(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.isSDK(o.token) && typeof o.validator_moniker === "string");
  },
  isAmino(o: any): o is PortfolioStakingDelegationAmino {
    return o && (o.$typeUrl === PortfolioStakingDelegation.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isAmino(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.isAmino(o.token) && typeof o.validator_moniker === "string");
  },
  encode(message: PortfolioStakingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.validatorMoniker !== "") {
      writer.uint32(42).string(message.validatorMoniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioStakingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStakingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.validatorMoniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioStakingDelegation {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      shares: isSet(object.shares) ? String(object.shares) : "",
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined,
      validatorMoniker: isSet(object.validatorMoniker) ? String(object.validatorMoniker) : ""
    };
  },
  toJSON(message: PortfolioStakingDelegation): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.shares !== undefined && (obj.shares = message.shares);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    message.validatorMoniker !== undefined && (obj.validatorMoniker = message.validatorMoniker);
    return obj;
  },
  fromPartial(object: Partial<PortfolioStakingDelegation>): PortfolioStakingDelegation {
    const message = createBasePortfolioStakingDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.shares = object.shares ?? "";
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    message.validatorMoniker = object.validatorMoniker ?? "";
    return message;
  },
  fromAmino(object: PortfolioStakingDelegationAmino): PortfolioStakingDelegation {
    const message = createBasePortfolioStakingDelegation();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    if (object.validator_moniker !== undefined && object.validator_moniker !== null) {
      message.validatorMoniker = object.validator_moniker;
    }
    return message;
  },
  toAmino(message: PortfolioStakingDelegation, useInterfaces: boolean = true): PortfolioStakingDelegationAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.shares = padDecimal(message.shares) === "" ? undefined : padDecimal(message.shares);
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    obj.validator_moniker = message.validatorMoniker === "" ? undefined : message.validatorMoniker;
    return obj;
  },
  fromAminoMsg(object: PortfolioStakingDelegationAminoMsg): PortfolioStakingDelegation {
    return PortfolioStakingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioStakingDelegationProtoMsg, useInterfaces: boolean = true): PortfolioStakingDelegation {
    return PortfolioStakingDelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioStakingDelegation): Uint8Array {
    return PortfolioStakingDelegation.encode(message).finish();
  },
  toProtoMsg(message: PortfolioStakingDelegation): PortfolioStakingDelegationProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingDelegation",
      value: PortfolioStakingDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioStakingDelegation.typeUrl, PortfolioStakingDelegation);
function createBasePortfolioStakingUnbonding(): PortfolioStakingUnbonding {
  return {
    validatorAddress: "",
    completionTime: Timestamp.fromPartial({}),
    unbondingId: BigInt(0),
    token: PortfolioToken.fromPartial({}),
    validatorMoniker: ""
  };
}
export const PortfolioStakingUnbonding = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingUnbonding",
  is(o: any): o is PortfolioStakingUnbonding {
    return o && (o.$typeUrl === PortfolioStakingUnbonding.typeUrl || typeof o.validatorAddress === "string" && Timestamp.is(o.completionTime) && typeof o.unbondingId === "bigint" && PortfolioToken.is(o.token) && typeof o.validatorMoniker === "string");
  },
  isSDK(o: any): o is PortfolioStakingUnbondingSDKType {
    return o && (o.$typeUrl === PortfolioStakingUnbonding.typeUrl || typeof o.validator_address === "string" && Timestamp.isSDK(o.completion_time) && typeof o.unbonding_id === "bigint" && PortfolioToken.isSDK(o.token) && typeof o.validator_moniker === "string");
  },
  isAmino(o: any): o is PortfolioStakingUnbondingAmino {
    return o && (o.$typeUrl === PortfolioStakingUnbonding.typeUrl || typeof o.validator_address === "string" && Timestamp.isAmino(o.completion_time) && typeof o.unbonding_id === "bigint" && PortfolioToken.isAmino(o.token) && typeof o.validator_moniker === "string");
  },
  encode(message: PortfolioStakingUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(24).uint64(message.unbondingId);
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.validatorMoniker !== "") {
      writer.uint32(42).string(message.validatorMoniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioStakingUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStakingUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.unbondingId = reader.uint64();
          break;
        case 4:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.validatorMoniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioStakingUnbonding {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0),
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined,
      validatorMoniker: isSet(object.validatorMoniker) ? String(object.validatorMoniker) : ""
    };
  },
  toJSON(message: PortfolioStakingUnbonding): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    message.validatorMoniker !== undefined && (obj.validatorMoniker = message.validatorMoniker);
    return obj;
  },
  fromPartial(object: Partial<PortfolioStakingUnbonding>): PortfolioStakingUnbonding {
    const message = createBasePortfolioStakingUnbonding();
    message.validatorAddress = object.validatorAddress ?? "";
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    message.validatorMoniker = object.validatorMoniker ?? "";
    return message;
  },
  fromAmino(object: PortfolioStakingUnbondingAmino): PortfolioStakingUnbonding {
    const message = createBasePortfolioStakingUnbonding();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    if (object.validator_moniker !== undefined && object.validator_moniker !== null) {
      message.validatorMoniker = object.validator_moniker;
    }
    return message;
  },
  toAmino(message: PortfolioStakingUnbonding, useInterfaces: boolean = true): PortfolioStakingUnbondingAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.unbonding_id = message.unbondingId ? message.unbondingId.toString() : undefined;
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    obj.validator_moniker = message.validatorMoniker === "" ? undefined : message.validatorMoniker;
    return obj;
  },
  fromAminoMsg(object: PortfolioStakingUnbondingAminoMsg): PortfolioStakingUnbonding {
    return PortfolioStakingUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioStakingUnbondingProtoMsg, useInterfaces: boolean = true): PortfolioStakingUnbonding {
    return PortfolioStakingUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioStakingUnbonding): Uint8Array {
    return PortfolioStakingUnbonding.encode(message).finish();
  },
  toProtoMsg(message: PortfolioStakingUnbonding): PortfolioStakingUnbondingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioStakingUnbonding",
      value: PortfolioStakingUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioStakingUnbonding.typeUrl, PortfolioStakingUnbonding);
function createBasePortfolioIncentivesBond(): PortfolioIncentivesBond {
  return {
    rewards: [],
    token: PortfolioToken.fromPartial({})
  };
}
export const PortfolioIncentivesBond = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesBond",
  is(o: any): o is PortfolioIncentivesBond {
    return o && (o.$typeUrl === PortfolioIncentivesBond.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])) && PortfolioToken.is(o.token));
  },
  isSDK(o: any): o is PortfolioIncentivesBondSDKType {
    return o && (o.$typeUrl === PortfolioIncentivesBond.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])) && PortfolioToken.isSDK(o.token));
  },
  isAmino(o: any): o is PortfolioIncentivesBondAmino {
    return o && (o.$typeUrl === PortfolioIncentivesBond.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])) && PortfolioToken.isAmino(o.token));
  },
  encode(message: PortfolioIncentivesBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioIncentivesBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioIncentivesBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioIncentivesBond {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioIncentivesBond): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioIncentivesBond>): PortfolioIncentivesBond {
    const message = createBasePortfolioIncentivesBond();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioIncentivesBondAmino): PortfolioIncentivesBond {
    const message = createBasePortfolioIncentivesBond();
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioIncentivesBond, useInterfaces: boolean = true): PortfolioIncentivesBondAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioIncentivesBondAminoMsg): PortfolioIncentivesBond {
    return PortfolioIncentivesBond.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioIncentivesBondProtoMsg, useInterfaces: boolean = true): PortfolioIncentivesBond {
    return PortfolioIncentivesBond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioIncentivesBond): Uint8Array {
    return PortfolioIncentivesBond.encode(message).finish();
  },
  toProtoMsg(message: PortfolioIncentivesBond): PortfolioIncentivesBondProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesBond",
      value: PortfolioIncentivesBond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioIncentivesBond.typeUrl, PortfolioIncentivesBond);
function createBasePortfolioIncentivesUnbonding(): PortfolioIncentivesUnbonding {
  return {
    completionTime: Timestamp.fromPartial({}),
    unbondingId: BigInt(0),
    autoClaim: false,
    token: PortfolioToken.fromPartial({})
  };
}
export const PortfolioIncentivesUnbonding = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesUnbonding",
  is(o: any): o is PortfolioIncentivesUnbonding {
    return o && (o.$typeUrl === PortfolioIncentivesUnbonding.typeUrl || Timestamp.is(o.completionTime) && typeof o.unbondingId === "bigint" && typeof o.autoClaim === "boolean" && PortfolioToken.is(o.token));
  },
  isSDK(o: any): o is PortfolioIncentivesUnbondingSDKType {
    return o && (o.$typeUrl === PortfolioIncentivesUnbonding.typeUrl || Timestamp.isSDK(o.completion_time) && typeof o.unbonding_id === "bigint" && typeof o.auto_claim === "boolean" && PortfolioToken.isSDK(o.token));
  },
  isAmino(o: any): o is PortfolioIncentivesUnbondingAmino {
    return o && (o.$typeUrl === PortfolioIncentivesUnbonding.typeUrl || Timestamp.isAmino(o.completion_time) && typeof o.unbonding_id === "bigint" && typeof o.auto_claim === "boolean" && PortfolioToken.isAmino(o.token));
  },
  encode(message: PortfolioIncentivesUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingId);
    }
    if (message.autoClaim === true) {
      writer.uint32(24).bool(message.autoClaim);
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioIncentivesUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioIncentivesUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.unbondingId = reader.uint64();
          break;
        case 3:
          message.autoClaim = reader.bool();
          break;
        case 4:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioIncentivesUnbonding {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0),
      autoClaim: isSet(object.autoClaim) ? Boolean(object.autoClaim) : false,
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioIncentivesUnbonding): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.autoClaim !== undefined && (obj.autoClaim = message.autoClaim);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioIncentivesUnbonding>): PortfolioIncentivesUnbonding {
    const message = createBasePortfolioIncentivesUnbonding();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.autoClaim = object.autoClaim ?? false;
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioIncentivesUnbondingAmino): PortfolioIncentivesUnbonding {
    const message = createBasePortfolioIncentivesUnbonding();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    if (object.auto_claim !== undefined && object.auto_claim !== null) {
      message.autoClaim = object.auto_claim;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioIncentivesUnbonding, useInterfaces: boolean = true): PortfolioIncentivesUnbondingAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.unbonding_id = message.unbondingId ? message.unbondingId.toString() : undefined;
    obj.auto_claim = message.autoClaim === false ? undefined : message.autoClaim;
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioIncentivesUnbondingAminoMsg): PortfolioIncentivesUnbonding {
    return PortfolioIncentivesUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioIncentivesUnbondingProtoMsg, useInterfaces: boolean = true): PortfolioIncentivesUnbonding {
    return PortfolioIncentivesUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioIncentivesUnbonding): Uint8Array {
    return PortfolioIncentivesUnbonding.encode(message).finish();
  },
  toProtoMsg(message: PortfolioIncentivesUnbonding): PortfolioIncentivesUnbondingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioIncentivesUnbonding",
      value: PortfolioIncentivesUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioIncentivesUnbonding.typeUrl, PortfolioIncentivesUnbonding);
function createBasePortfolioAllianceDelegation(): PortfolioAllianceDelegation {
  return {
    validatorAddress: "",
    rewards: [],
    shares: "",
    token: PortfolioToken.fromPartial({}),
    validatorMoniker: ""
  };
}
export const PortfolioAllianceDelegation = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceDelegation",
  is(o: any): o is PortfolioAllianceDelegation {
    return o && (o.$typeUrl === PortfolioAllianceDelegation.typeUrl || typeof o.validatorAddress === "string" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.is(o.token) && typeof o.validatorMoniker === "string");
  },
  isSDK(o: any): o is PortfolioAllianceDelegationSDKType {
    return o && (o.$typeUrl === PortfolioAllianceDelegation.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.isSDK(o.token) && typeof o.validator_moniker === "string");
  },
  isAmino(o: any): o is PortfolioAllianceDelegationAmino {
    return o && (o.$typeUrl === PortfolioAllianceDelegation.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])) && typeof o.shares === "string" && PortfolioToken.isAmino(o.token) && typeof o.validator_moniker === "string");
  },
  encode(message: PortfolioAllianceDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.validatorMoniker !== "") {
      writer.uint32(42).string(message.validatorMoniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioAllianceDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioAllianceDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.validatorMoniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioAllianceDelegation {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      shares: isSet(object.shares) ? String(object.shares) : "",
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined,
      validatorMoniker: isSet(object.validatorMoniker) ? String(object.validatorMoniker) : ""
    };
  },
  toJSON(message: PortfolioAllianceDelegation): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.shares !== undefined && (obj.shares = message.shares);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    message.validatorMoniker !== undefined && (obj.validatorMoniker = message.validatorMoniker);
    return obj;
  },
  fromPartial(object: Partial<PortfolioAllianceDelegation>): PortfolioAllianceDelegation {
    const message = createBasePortfolioAllianceDelegation();
    message.validatorAddress = object.validatorAddress ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.shares = object.shares ?? "";
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    message.validatorMoniker = object.validatorMoniker ?? "";
    return message;
  },
  fromAmino(object: PortfolioAllianceDelegationAmino): PortfolioAllianceDelegation {
    const message = createBasePortfolioAllianceDelegation();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    if (object.validator_moniker !== undefined && object.validator_moniker !== null) {
      message.validatorMoniker = object.validator_moniker;
    }
    return message;
  },
  toAmino(message: PortfolioAllianceDelegation, useInterfaces: boolean = true): PortfolioAllianceDelegationAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.shares = padDecimal(message.shares) === "" ? undefined : padDecimal(message.shares);
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    obj.validator_moniker = message.validatorMoniker === "" ? undefined : message.validatorMoniker;
    return obj;
  },
  fromAminoMsg(object: PortfolioAllianceDelegationAminoMsg): PortfolioAllianceDelegation {
    return PortfolioAllianceDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioAllianceDelegationProtoMsg, useInterfaces: boolean = true): PortfolioAllianceDelegation {
    return PortfolioAllianceDelegation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioAllianceDelegation): Uint8Array {
    return PortfolioAllianceDelegation.encode(message).finish();
  },
  toProtoMsg(message: PortfolioAllianceDelegation): PortfolioAllianceDelegationProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceDelegation",
      value: PortfolioAllianceDelegation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioAllianceDelegation.typeUrl, PortfolioAllianceDelegation);
function createBasePortfolioAllianceUnbonding(): PortfolioAllianceUnbonding {
  return {
    validatorAddress: "",
    completionTime: Timestamp.fromPartial({}),
    token: PortfolioToken.fromPartial({}),
    validatorMoniker: ""
  };
}
export const PortfolioAllianceUnbonding = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceUnbonding",
  is(o: any): o is PortfolioAllianceUnbonding {
    return o && (o.$typeUrl === PortfolioAllianceUnbonding.typeUrl || typeof o.validatorAddress === "string" && Timestamp.is(o.completionTime) && PortfolioToken.is(o.token) && typeof o.validatorMoniker === "string");
  },
  isSDK(o: any): o is PortfolioAllianceUnbondingSDKType {
    return o && (o.$typeUrl === PortfolioAllianceUnbonding.typeUrl || typeof o.validator_address === "string" && Timestamp.isSDK(o.completion_time) && PortfolioToken.isSDK(o.token) && typeof o.validator_moniker === "string");
  },
  isAmino(o: any): o is PortfolioAllianceUnbondingAmino {
    return o && (o.$typeUrl === PortfolioAllianceUnbonding.typeUrl || typeof o.validator_address === "string" && Timestamp.isAmino(o.completion_time) && PortfolioToken.isAmino(o.token) && typeof o.validator_moniker === "string");
  },
  encode(message: PortfolioAllianceUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorMoniker !== "") {
      writer.uint32(34).string(message.validatorMoniker);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioAllianceUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioAllianceUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.validatorMoniker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioAllianceUnbonding {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined,
      validatorMoniker: isSet(object.validatorMoniker) ? String(object.validatorMoniker) : ""
    };
  },
  toJSON(message: PortfolioAllianceUnbonding): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    message.validatorMoniker !== undefined && (obj.validatorMoniker = message.validatorMoniker);
    return obj;
  },
  fromPartial(object: Partial<PortfolioAllianceUnbonding>): PortfolioAllianceUnbonding {
    const message = createBasePortfolioAllianceUnbonding();
    message.validatorAddress = object.validatorAddress ?? "";
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    message.validatorMoniker = object.validatorMoniker ?? "";
    return message;
  },
  fromAmino(object: PortfolioAllianceUnbondingAmino): PortfolioAllianceUnbonding {
    const message = createBasePortfolioAllianceUnbonding();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    if (object.validator_moniker !== undefined && object.validator_moniker !== null) {
      message.validatorMoniker = object.validator_moniker;
    }
    return message;
  },
  toAmino(message: PortfolioAllianceUnbonding, useInterfaces: boolean = true): PortfolioAllianceUnbondingAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    obj.validator_moniker = message.validatorMoniker === "" ? undefined : message.validatorMoniker;
    return obj;
  },
  fromAminoMsg(object: PortfolioAllianceUnbondingAminoMsg): PortfolioAllianceUnbonding {
    return PortfolioAllianceUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioAllianceUnbondingProtoMsg, useInterfaces: boolean = true): PortfolioAllianceUnbonding {
    return PortfolioAllianceUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioAllianceUnbonding): Uint8Array {
    return PortfolioAllianceUnbonding.encode(message).finish();
  },
  toProtoMsg(message: PortfolioAllianceUnbonding): PortfolioAllianceUnbondingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioAllianceUnbonding",
      value: PortfolioAllianceUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioAllianceUnbonding.typeUrl, PortfolioAllianceUnbonding);
function createBasePortfolioIcstakingUnbonding(): PortfolioIcstakingUnbonding {
  return {
    hostChainId: "",
    epoch: BigInt(0),
    transferChannel: "",
    received: false,
    completionTime: Timestamp.fromPartial({}),
    exchangeRate: "",
    token: PortfolioToken.fromPartial({})
  };
}
export const PortfolioIcstakingUnbonding = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioIcstakingUnbonding",
  is(o: any): o is PortfolioIcstakingUnbonding {
    return o && (o.$typeUrl === PortfolioIcstakingUnbonding.typeUrl || typeof o.hostChainId === "string" && typeof o.epoch === "bigint" && typeof o.transferChannel === "string" && typeof o.received === "boolean" && Timestamp.is(o.completionTime) && typeof o.exchangeRate === "string" && PortfolioToken.is(o.token));
  },
  isSDK(o: any): o is PortfolioIcstakingUnbondingSDKType {
    return o && (o.$typeUrl === PortfolioIcstakingUnbonding.typeUrl || typeof o.host_chain_id === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string" && typeof o.received === "boolean" && Timestamp.isSDK(o.completion_time) && typeof o.exchange_rate === "string" && PortfolioToken.isSDK(o.token));
  },
  isAmino(o: any): o is PortfolioIcstakingUnbondingAmino {
    return o && (o.$typeUrl === PortfolioIcstakingUnbonding.typeUrl || typeof o.host_chain_id === "string" && typeof o.epoch === "bigint" && typeof o.transfer_channel === "string" && typeof o.received === "boolean" && Timestamp.isAmino(o.completion_time) && typeof o.exchange_rate === "string" && PortfolioToken.isAmino(o.token));
  },
  encode(message: PortfolioIcstakingUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.received === true) {
      writer.uint32(32).bool(message.received);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.exchangeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.token !== undefined) {
      PortfolioToken.encode(message.token, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioIcstakingUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioIcstakingUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.epoch = reader.uint64();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.received = reader.bool();
          break;
        case 5:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.token = PortfolioToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioIcstakingUnbonding {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      received: isSet(object.received) ? Boolean(object.received) : false,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      token: isSet(object.token) ? PortfolioToken.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioIcstakingUnbonding): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.received !== undefined && (obj.received = message.received);
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.token !== undefined && (obj.token = message.token ? PortfolioToken.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioIcstakingUnbonding>): PortfolioIcstakingUnbonding {
    const message = createBasePortfolioIcstakingUnbonding();
    message.hostChainId = object.hostChainId ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.transferChannel = object.transferChannel ?? "";
    message.received = object.received ?? false;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.exchangeRate = object.exchangeRate ?? "";
    message.token = object.token !== undefined && object.token !== null ? PortfolioToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioIcstakingUnbondingAmino): PortfolioIcstakingUnbonding {
    const message = createBasePortfolioIcstakingUnbonding();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = PortfolioToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioIcstakingUnbonding, useInterfaces: boolean = true): PortfolioIcstakingUnbondingAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.received = message.received === false ? undefined : message.received;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime, useInterfaces) : undefined;
    obj.exchange_rate = padDecimal(message.exchangeRate) === "" ? undefined : padDecimal(message.exchangeRate);
    obj.token = message.token ? PortfolioToken.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioIcstakingUnbondingAminoMsg): PortfolioIcstakingUnbonding {
    return PortfolioIcstakingUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioIcstakingUnbondingProtoMsg, useInterfaces: boolean = true): PortfolioIcstakingUnbonding {
    return PortfolioIcstakingUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioIcstakingUnbonding): Uint8Array {
    return PortfolioIcstakingUnbonding.encode(message).finish();
  },
  toProtoMsg(message: PortfolioIcstakingUnbonding): PortfolioIcstakingUnbondingProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioIcstakingUnbonding",
      value: PortfolioIcstakingUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioIcstakingUnbonding.typeUrl, PortfolioIcstakingUnbonding);
function createBaseQueryPortfolioResponse(): QueryPortfolioResponse {
  return {
    walletTokens: [],
    yStakings: [],
    yLaunchStakings: [],
    pGovStakedTokens: [],
    stakingDelegations: [],
    stakingUnbondings: [],
    incentivesBonds: [],
    incentivesUnbondings: [],
    allianceDelegations: [],
    allianceUnbondings: [],
    icstakingUnbondings: [],
    walletTokensValueInStableCoinTerms: "",
    yStakingsValueInStableCoinTerms: "",
    yLaunchStakingsValueInStableCoinTerms: "",
    pGovTokensValueInStableCoinTerms: "",
    stakingDelegationsValueInStableCoinTerms: "",
    stakingUnbondingsValueInStableCoinTerms: "",
    incentivesBondsValueInStableCoinTerms: "",
    incentivesUnbondingsValueInStableCoinTerms: "",
    allianceDelegationsValueInStableCoinTerms: "",
    allianceUnbondingsValueInStableCoinTerms: "",
    icstakingUnbondingsValueInStableCoinTerms: "",
    totalValueInStableCoinTerms: "",
    totalExcludingUnbondingValueInStableCoinTerms: "",
    rewardsValueInStableCoinTerms: ""
  };
}
export const QueryPortfolioResponse = {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse",
  is(o: any): o is QueryPortfolioResponse {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.walletTokens) && (!o.walletTokens.length || PortfolioToken.is(o.walletTokens[0])) && Array.isArray(o.yStakings) && (!o.yStakings.length || PortfolioYStaking.is(o.yStakings[0])) && Array.isArray(o.yLaunchStakings) && (!o.yLaunchStakings.length || PortfolioYLaunchStaking.is(o.yLaunchStakings[0])) && Array.isArray(o.pGovStakedTokens) && (!o.pGovStakedTokens.length || PortfolioToken.is(o.pGovStakedTokens[0])) && Array.isArray(o.stakingDelegations) && (!o.stakingDelegations.length || PortfolioStakingDelegation.is(o.stakingDelegations[0])) && Array.isArray(o.stakingUnbondings) && (!o.stakingUnbondings.length || PortfolioStakingUnbonding.is(o.stakingUnbondings[0])) && Array.isArray(o.incentivesBonds) && (!o.incentivesBonds.length || PortfolioIncentivesBond.is(o.incentivesBonds[0])) && Array.isArray(o.incentivesUnbondings) && (!o.incentivesUnbondings.length || PortfolioIncentivesUnbonding.is(o.incentivesUnbondings[0])) && Array.isArray(o.allianceDelegations) && (!o.allianceDelegations.length || PortfolioAllianceDelegation.is(o.allianceDelegations[0])) && Array.isArray(o.allianceUnbondings) && (!o.allianceUnbondings.length || PortfolioAllianceUnbonding.is(o.allianceUnbondings[0])) && Array.isArray(o.icstakingUnbondings) && (!o.icstakingUnbondings.length || PortfolioIcstakingUnbonding.is(o.icstakingUnbondings[0])) && typeof o.walletTokensValueInStableCoinTerms === "string" && typeof o.yStakingsValueInStableCoinTerms === "string" && typeof o.yLaunchStakingsValueInStableCoinTerms === "string" && typeof o.pGovTokensValueInStableCoinTerms === "string" && typeof o.stakingDelegationsValueInStableCoinTerms === "string" && typeof o.stakingUnbondingsValueInStableCoinTerms === "string" && typeof o.incentivesBondsValueInStableCoinTerms === "string" && typeof o.incentivesUnbondingsValueInStableCoinTerms === "string" && typeof o.allianceDelegationsValueInStableCoinTerms === "string" && typeof o.allianceUnbondingsValueInStableCoinTerms === "string" && typeof o.icstakingUnbondingsValueInStableCoinTerms === "string" && typeof o.totalValueInStableCoinTerms === "string" && typeof o.totalExcludingUnbondingValueInStableCoinTerms === "string" && typeof o.rewardsValueInStableCoinTerms === "string");
  },
  isSDK(o: any): o is QueryPortfolioResponseSDKType {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.wallet_tokens) && (!o.wallet_tokens.length || PortfolioToken.isSDK(o.wallet_tokens[0])) && Array.isArray(o.y_stakings) && (!o.y_stakings.length || PortfolioYStaking.isSDK(o.y_stakings[0])) && Array.isArray(o.y_launch_stakings) && (!o.y_launch_stakings.length || PortfolioYLaunchStaking.isSDK(o.y_launch_stakings[0])) && Array.isArray(o.p_gov_staked_tokens) && (!o.p_gov_staked_tokens.length || PortfolioToken.isSDK(o.p_gov_staked_tokens[0])) && Array.isArray(o.staking_delegations) && (!o.staking_delegations.length || PortfolioStakingDelegation.isSDK(o.staking_delegations[0])) && Array.isArray(o.staking_unbondings) && (!o.staking_unbondings.length || PortfolioStakingUnbonding.isSDK(o.staking_unbondings[0])) && Array.isArray(o.incentives_bonds) && (!o.incentives_bonds.length || PortfolioIncentivesBond.isSDK(o.incentives_bonds[0])) && Array.isArray(o.incentives_unbondings) && (!o.incentives_unbondings.length || PortfolioIncentivesUnbonding.isSDK(o.incentives_unbondings[0])) && Array.isArray(o.alliance_delegations) && (!o.alliance_delegations.length || PortfolioAllianceDelegation.isSDK(o.alliance_delegations[0])) && Array.isArray(o.alliance_unbondings) && (!o.alliance_unbondings.length || PortfolioAllianceUnbonding.isSDK(o.alliance_unbondings[0])) && Array.isArray(o.icstaking_unbondings) && (!o.icstaking_unbondings.length || PortfolioIcstakingUnbonding.isSDK(o.icstaking_unbondings[0])) && typeof o.wallet_tokens_value_in_stable_coin_terms === "string" && typeof o.y_stakings_value_in_stable_coin_terms === "string" && typeof o.y_launch_stakings_value_in_stable_coin_terms === "string" && typeof o.p_gov_tokens_value_in_stable_coin_terms === "string" && typeof o.staking_delegations_value_in_stable_coin_terms === "string" && typeof o.staking_unbondings_value_in_stable_coin_terms === "string" && typeof o.incentives_bonds_value_in_stable_coin_terms === "string" && typeof o.incentives_unbondings_value_in_stable_coin_terms === "string" && typeof o.alliance_delegations_value_in_stable_coin_terms === "string" && typeof o.alliance_unbondings_value_in_stable_coin_terms === "string" && typeof o.icstaking_unbondings_value_in_stable_coin_terms === "string" && typeof o.total_value_in_stable_coin_terms === "string" && typeof o.total_excluding_unbonding_value_in_stable_coin_terms === "string" && typeof o.rewards_value_in_stable_coin_terms === "string");
  },
  isAmino(o: any): o is QueryPortfolioResponseAmino {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.wallet_tokens) && (!o.wallet_tokens.length || PortfolioToken.isAmino(o.wallet_tokens[0])) && Array.isArray(o.y_stakings) && (!o.y_stakings.length || PortfolioYStaking.isAmino(o.y_stakings[0])) && Array.isArray(o.y_launch_stakings) && (!o.y_launch_stakings.length || PortfolioYLaunchStaking.isAmino(o.y_launch_stakings[0])) && Array.isArray(o.p_gov_staked_tokens) && (!o.p_gov_staked_tokens.length || PortfolioToken.isAmino(o.p_gov_staked_tokens[0])) && Array.isArray(o.staking_delegations) && (!o.staking_delegations.length || PortfolioStakingDelegation.isAmino(o.staking_delegations[0])) && Array.isArray(o.staking_unbondings) && (!o.staking_unbondings.length || PortfolioStakingUnbonding.isAmino(o.staking_unbondings[0])) && Array.isArray(o.incentives_bonds) && (!o.incentives_bonds.length || PortfolioIncentivesBond.isAmino(o.incentives_bonds[0])) && Array.isArray(o.incentives_unbondings) && (!o.incentives_unbondings.length || PortfolioIncentivesUnbonding.isAmino(o.incentives_unbondings[0])) && Array.isArray(o.alliance_delegations) && (!o.alliance_delegations.length || PortfolioAllianceDelegation.isAmino(o.alliance_delegations[0])) && Array.isArray(o.alliance_unbondings) && (!o.alliance_unbondings.length || PortfolioAllianceUnbonding.isAmino(o.alliance_unbondings[0])) && Array.isArray(o.icstaking_unbondings) && (!o.icstaking_unbondings.length || PortfolioIcstakingUnbonding.isAmino(o.icstaking_unbondings[0])) && typeof o.wallet_tokens_value_in_stable_coin_terms === "string" && typeof o.y_stakings_value_in_stable_coin_terms === "string" && typeof o.y_launch_stakings_value_in_stable_coin_terms === "string" && typeof o.p_gov_tokens_value_in_stable_coin_terms === "string" && typeof o.staking_delegations_value_in_stable_coin_terms === "string" && typeof o.staking_unbondings_value_in_stable_coin_terms === "string" && typeof o.incentives_bonds_value_in_stable_coin_terms === "string" && typeof o.incentives_unbondings_value_in_stable_coin_terms === "string" && typeof o.alliance_delegations_value_in_stable_coin_terms === "string" && typeof o.alliance_unbondings_value_in_stable_coin_terms === "string" && typeof o.icstaking_unbondings_value_in_stable_coin_terms === "string" && typeof o.total_value_in_stable_coin_terms === "string" && typeof o.total_excluding_unbonding_value_in_stable_coin_terms === "string" && typeof o.rewards_value_in_stable_coin_terms === "string");
  },
  encode(message: QueryPortfolioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.walletTokens) {
      PortfolioToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.yStakings) {
      PortfolioYStaking.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.yLaunchStakings) {
      PortfolioYLaunchStaking.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.pGovStakedTokens) {
      PortfolioToken.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.stakingDelegations) {
      PortfolioStakingDelegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.stakingUnbondings) {
      PortfolioStakingUnbonding.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.incentivesBonds) {
      PortfolioIncentivesBond.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.incentivesUnbondings) {
      PortfolioIncentivesUnbonding.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.allianceDelegations) {
      PortfolioAllianceDelegation.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.allianceUnbondings) {
      PortfolioAllianceUnbonding.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.icstakingUnbondings) {
      PortfolioIcstakingUnbonding.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.walletTokensValueInStableCoinTerms !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.walletTokensValueInStableCoinTerms, 18).atomics);
    }
    if (message.yStakingsValueInStableCoinTerms !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.yStakingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.yLaunchStakingsValueInStableCoinTerms !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.yLaunchStakingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.pGovTokensValueInStableCoinTerms !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.pGovTokensValueInStableCoinTerms, 18).atomics);
    }
    if (message.stakingDelegationsValueInStableCoinTerms !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.stakingDelegationsValueInStableCoinTerms, 18).atomics);
    }
    if (message.stakingUnbondingsValueInStableCoinTerms !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.stakingUnbondingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.incentivesBondsValueInStableCoinTerms !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.incentivesBondsValueInStableCoinTerms, 18).atomics);
    }
    if (message.incentivesUnbondingsValueInStableCoinTerms !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.incentivesUnbondingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.allianceDelegationsValueInStableCoinTerms !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.allianceDelegationsValueInStableCoinTerms, 18).atomics);
    }
    if (message.allianceUnbondingsValueInStableCoinTerms !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.allianceUnbondingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.icstakingUnbondingsValueInStableCoinTerms !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.icstakingUnbondingsValueInStableCoinTerms, 18).atomics);
    }
    if (message.totalValueInStableCoinTerms !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.totalValueInStableCoinTerms, 18).atomics);
    }
    if (message.totalExcludingUnbondingValueInStableCoinTerms !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.totalExcludingUnbondingValueInStableCoinTerms, 18).atomics);
    }
    if (message.rewardsValueInStableCoinTerms !== "") {
      writer.uint32(202).string(Decimal.fromUserInput(message.rewardsValueInStableCoinTerms, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPortfolioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletTokens.push(PortfolioToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.yStakings.push(PortfolioYStaking.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.yLaunchStakings.push(PortfolioYLaunchStaking.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.pGovStakedTokens.push(PortfolioToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.stakingDelegations.push(PortfolioStakingDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.stakingUnbondings.push(PortfolioStakingUnbonding.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.incentivesBonds.push(PortfolioIncentivesBond.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.incentivesUnbondings.push(PortfolioIncentivesUnbonding.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.allianceDelegations.push(PortfolioAllianceDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.allianceUnbondings.push(PortfolioAllianceUnbonding.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 11:
          message.icstakingUnbondings.push(PortfolioIcstakingUnbonding.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 12:
          message.walletTokensValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.yStakingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.yLaunchStakingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.pGovTokensValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.stakingDelegationsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.stakingUnbondingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.incentivesBondsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.incentivesUnbondingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.allianceDelegationsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.allianceUnbondingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.icstakingUnbondingsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 23:
          message.totalValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 24:
          message.totalExcludingUnbondingValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 25:
          message.rewardsValueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPortfolioResponse {
    return {
      walletTokens: Array.isArray(object?.walletTokens) ? object.walletTokens.map((e: any) => PortfolioToken.fromJSON(e)) : [],
      yStakings: Array.isArray(object?.yStakings) ? object.yStakings.map((e: any) => PortfolioYStaking.fromJSON(e)) : [],
      yLaunchStakings: Array.isArray(object?.yLaunchStakings) ? object.yLaunchStakings.map((e: any) => PortfolioYLaunchStaking.fromJSON(e)) : [],
      pGovStakedTokens: Array.isArray(object?.pGovStakedTokens) ? object.pGovStakedTokens.map((e: any) => PortfolioToken.fromJSON(e)) : [],
      stakingDelegations: Array.isArray(object?.stakingDelegations) ? object.stakingDelegations.map((e: any) => PortfolioStakingDelegation.fromJSON(e)) : [],
      stakingUnbondings: Array.isArray(object?.stakingUnbondings) ? object.stakingUnbondings.map((e: any) => PortfolioStakingUnbonding.fromJSON(e)) : [],
      incentivesBonds: Array.isArray(object?.incentivesBonds) ? object.incentivesBonds.map((e: any) => PortfolioIncentivesBond.fromJSON(e)) : [],
      incentivesUnbondings: Array.isArray(object?.incentivesUnbondings) ? object.incentivesUnbondings.map((e: any) => PortfolioIncentivesUnbonding.fromJSON(e)) : [],
      allianceDelegations: Array.isArray(object?.allianceDelegations) ? object.allianceDelegations.map((e: any) => PortfolioAllianceDelegation.fromJSON(e)) : [],
      allianceUnbondings: Array.isArray(object?.allianceUnbondings) ? object.allianceUnbondings.map((e: any) => PortfolioAllianceUnbonding.fromJSON(e)) : [],
      icstakingUnbondings: Array.isArray(object?.icstakingUnbondings) ? object.icstakingUnbondings.map((e: any) => PortfolioIcstakingUnbonding.fromJSON(e)) : [],
      walletTokensValueInStableCoinTerms: isSet(object.walletTokensValueInStableCoinTerms) ? String(object.walletTokensValueInStableCoinTerms) : "",
      yStakingsValueInStableCoinTerms: isSet(object.yStakingsValueInStableCoinTerms) ? String(object.yStakingsValueInStableCoinTerms) : "",
      yLaunchStakingsValueInStableCoinTerms: isSet(object.yLaunchStakingsValueInStableCoinTerms) ? String(object.yLaunchStakingsValueInStableCoinTerms) : "",
      pGovTokensValueInStableCoinTerms: isSet(object.pGovTokensValueInStableCoinTerms) ? String(object.pGovTokensValueInStableCoinTerms) : "",
      stakingDelegationsValueInStableCoinTerms: isSet(object.stakingDelegationsValueInStableCoinTerms) ? String(object.stakingDelegationsValueInStableCoinTerms) : "",
      stakingUnbondingsValueInStableCoinTerms: isSet(object.stakingUnbondingsValueInStableCoinTerms) ? String(object.stakingUnbondingsValueInStableCoinTerms) : "",
      incentivesBondsValueInStableCoinTerms: isSet(object.incentivesBondsValueInStableCoinTerms) ? String(object.incentivesBondsValueInStableCoinTerms) : "",
      incentivesUnbondingsValueInStableCoinTerms: isSet(object.incentivesUnbondingsValueInStableCoinTerms) ? String(object.incentivesUnbondingsValueInStableCoinTerms) : "",
      allianceDelegationsValueInStableCoinTerms: isSet(object.allianceDelegationsValueInStableCoinTerms) ? String(object.allianceDelegationsValueInStableCoinTerms) : "",
      allianceUnbondingsValueInStableCoinTerms: isSet(object.allianceUnbondingsValueInStableCoinTerms) ? String(object.allianceUnbondingsValueInStableCoinTerms) : "",
      icstakingUnbondingsValueInStableCoinTerms: isSet(object.icstakingUnbondingsValueInStableCoinTerms) ? String(object.icstakingUnbondingsValueInStableCoinTerms) : "",
      totalValueInStableCoinTerms: isSet(object.totalValueInStableCoinTerms) ? String(object.totalValueInStableCoinTerms) : "",
      totalExcludingUnbondingValueInStableCoinTerms: isSet(object.totalExcludingUnbondingValueInStableCoinTerms) ? String(object.totalExcludingUnbondingValueInStableCoinTerms) : "",
      rewardsValueInStableCoinTerms: isSet(object.rewardsValueInStableCoinTerms) ? String(object.rewardsValueInStableCoinTerms) : ""
    };
  },
  toJSON(message: QueryPortfolioResponse): unknown {
    const obj: any = {};
    if (message.walletTokens) {
      obj.walletTokens = message.walletTokens.map(e => e ? PortfolioToken.toJSON(e) : undefined);
    } else {
      obj.walletTokens = [];
    }
    if (message.yStakings) {
      obj.yStakings = message.yStakings.map(e => e ? PortfolioYStaking.toJSON(e) : undefined);
    } else {
      obj.yStakings = [];
    }
    if (message.yLaunchStakings) {
      obj.yLaunchStakings = message.yLaunchStakings.map(e => e ? PortfolioYLaunchStaking.toJSON(e) : undefined);
    } else {
      obj.yLaunchStakings = [];
    }
    if (message.pGovStakedTokens) {
      obj.pGovStakedTokens = message.pGovStakedTokens.map(e => e ? PortfolioToken.toJSON(e) : undefined);
    } else {
      obj.pGovStakedTokens = [];
    }
    if (message.stakingDelegations) {
      obj.stakingDelegations = message.stakingDelegations.map(e => e ? PortfolioStakingDelegation.toJSON(e) : undefined);
    } else {
      obj.stakingDelegations = [];
    }
    if (message.stakingUnbondings) {
      obj.stakingUnbondings = message.stakingUnbondings.map(e => e ? PortfolioStakingUnbonding.toJSON(e) : undefined);
    } else {
      obj.stakingUnbondings = [];
    }
    if (message.incentivesBonds) {
      obj.incentivesBonds = message.incentivesBonds.map(e => e ? PortfolioIncentivesBond.toJSON(e) : undefined);
    } else {
      obj.incentivesBonds = [];
    }
    if (message.incentivesUnbondings) {
      obj.incentivesUnbondings = message.incentivesUnbondings.map(e => e ? PortfolioIncentivesUnbonding.toJSON(e) : undefined);
    } else {
      obj.incentivesUnbondings = [];
    }
    if (message.allianceDelegations) {
      obj.allianceDelegations = message.allianceDelegations.map(e => e ? PortfolioAllianceDelegation.toJSON(e) : undefined);
    } else {
      obj.allianceDelegations = [];
    }
    if (message.allianceUnbondings) {
      obj.allianceUnbondings = message.allianceUnbondings.map(e => e ? PortfolioAllianceUnbonding.toJSON(e) : undefined);
    } else {
      obj.allianceUnbondings = [];
    }
    if (message.icstakingUnbondings) {
      obj.icstakingUnbondings = message.icstakingUnbondings.map(e => e ? PortfolioIcstakingUnbonding.toJSON(e) : undefined);
    } else {
      obj.icstakingUnbondings = [];
    }
    message.walletTokensValueInStableCoinTerms !== undefined && (obj.walletTokensValueInStableCoinTerms = message.walletTokensValueInStableCoinTerms);
    message.yStakingsValueInStableCoinTerms !== undefined && (obj.yStakingsValueInStableCoinTerms = message.yStakingsValueInStableCoinTerms);
    message.yLaunchStakingsValueInStableCoinTerms !== undefined && (obj.yLaunchStakingsValueInStableCoinTerms = message.yLaunchStakingsValueInStableCoinTerms);
    message.pGovTokensValueInStableCoinTerms !== undefined && (obj.pGovTokensValueInStableCoinTerms = message.pGovTokensValueInStableCoinTerms);
    message.stakingDelegationsValueInStableCoinTerms !== undefined && (obj.stakingDelegationsValueInStableCoinTerms = message.stakingDelegationsValueInStableCoinTerms);
    message.stakingUnbondingsValueInStableCoinTerms !== undefined && (obj.stakingUnbondingsValueInStableCoinTerms = message.stakingUnbondingsValueInStableCoinTerms);
    message.incentivesBondsValueInStableCoinTerms !== undefined && (obj.incentivesBondsValueInStableCoinTerms = message.incentivesBondsValueInStableCoinTerms);
    message.incentivesUnbondingsValueInStableCoinTerms !== undefined && (obj.incentivesUnbondingsValueInStableCoinTerms = message.incentivesUnbondingsValueInStableCoinTerms);
    message.allianceDelegationsValueInStableCoinTerms !== undefined && (obj.allianceDelegationsValueInStableCoinTerms = message.allianceDelegationsValueInStableCoinTerms);
    message.allianceUnbondingsValueInStableCoinTerms !== undefined && (obj.allianceUnbondingsValueInStableCoinTerms = message.allianceUnbondingsValueInStableCoinTerms);
    message.icstakingUnbondingsValueInStableCoinTerms !== undefined && (obj.icstakingUnbondingsValueInStableCoinTerms = message.icstakingUnbondingsValueInStableCoinTerms);
    message.totalValueInStableCoinTerms !== undefined && (obj.totalValueInStableCoinTerms = message.totalValueInStableCoinTerms);
    message.totalExcludingUnbondingValueInStableCoinTerms !== undefined && (obj.totalExcludingUnbondingValueInStableCoinTerms = message.totalExcludingUnbondingValueInStableCoinTerms);
    message.rewardsValueInStableCoinTerms !== undefined && (obj.rewardsValueInStableCoinTerms = message.rewardsValueInStableCoinTerms);
    return obj;
  },
  fromPartial(object: Partial<QueryPortfolioResponse>): QueryPortfolioResponse {
    const message = createBaseQueryPortfolioResponse();
    message.walletTokens = object.walletTokens?.map(e => PortfolioToken.fromPartial(e)) || [];
    message.yStakings = object.yStakings?.map(e => PortfolioYStaking.fromPartial(e)) || [];
    message.yLaunchStakings = object.yLaunchStakings?.map(e => PortfolioYLaunchStaking.fromPartial(e)) || [];
    message.pGovStakedTokens = object.pGovStakedTokens?.map(e => PortfolioToken.fromPartial(e)) || [];
    message.stakingDelegations = object.stakingDelegations?.map(e => PortfolioStakingDelegation.fromPartial(e)) || [];
    message.stakingUnbondings = object.stakingUnbondings?.map(e => PortfolioStakingUnbonding.fromPartial(e)) || [];
    message.incentivesBonds = object.incentivesBonds?.map(e => PortfolioIncentivesBond.fromPartial(e)) || [];
    message.incentivesUnbondings = object.incentivesUnbondings?.map(e => PortfolioIncentivesUnbonding.fromPartial(e)) || [];
    message.allianceDelegations = object.allianceDelegations?.map(e => PortfolioAllianceDelegation.fromPartial(e)) || [];
    message.allianceUnbondings = object.allianceUnbondings?.map(e => PortfolioAllianceUnbonding.fromPartial(e)) || [];
    message.icstakingUnbondings = object.icstakingUnbondings?.map(e => PortfolioIcstakingUnbonding.fromPartial(e)) || [];
    message.walletTokensValueInStableCoinTerms = object.walletTokensValueInStableCoinTerms ?? "";
    message.yStakingsValueInStableCoinTerms = object.yStakingsValueInStableCoinTerms ?? "";
    message.yLaunchStakingsValueInStableCoinTerms = object.yLaunchStakingsValueInStableCoinTerms ?? "";
    message.pGovTokensValueInStableCoinTerms = object.pGovTokensValueInStableCoinTerms ?? "";
    message.stakingDelegationsValueInStableCoinTerms = object.stakingDelegationsValueInStableCoinTerms ?? "";
    message.stakingUnbondingsValueInStableCoinTerms = object.stakingUnbondingsValueInStableCoinTerms ?? "";
    message.incentivesBondsValueInStableCoinTerms = object.incentivesBondsValueInStableCoinTerms ?? "";
    message.incentivesUnbondingsValueInStableCoinTerms = object.incentivesUnbondingsValueInStableCoinTerms ?? "";
    message.allianceDelegationsValueInStableCoinTerms = object.allianceDelegationsValueInStableCoinTerms ?? "";
    message.allianceUnbondingsValueInStableCoinTerms = object.allianceUnbondingsValueInStableCoinTerms ?? "";
    message.icstakingUnbondingsValueInStableCoinTerms = object.icstakingUnbondingsValueInStableCoinTerms ?? "";
    message.totalValueInStableCoinTerms = object.totalValueInStableCoinTerms ?? "";
    message.totalExcludingUnbondingValueInStableCoinTerms = object.totalExcludingUnbondingValueInStableCoinTerms ?? "";
    message.rewardsValueInStableCoinTerms = object.rewardsValueInStableCoinTerms ?? "";
    return message;
  },
  fromAmino(object: QueryPortfolioResponseAmino): QueryPortfolioResponse {
    const message = createBaseQueryPortfolioResponse();
    message.walletTokens = object.wallet_tokens?.map(e => PortfolioToken.fromAmino(e)) || [];
    message.yStakings = object.y_stakings?.map(e => PortfolioYStaking.fromAmino(e)) || [];
    message.yLaunchStakings = object.y_launch_stakings?.map(e => PortfolioYLaunchStaking.fromAmino(e)) || [];
    message.pGovStakedTokens = object.p_gov_staked_tokens?.map(e => PortfolioToken.fromAmino(e)) || [];
    message.stakingDelegations = object.staking_delegations?.map(e => PortfolioStakingDelegation.fromAmino(e)) || [];
    message.stakingUnbondings = object.staking_unbondings?.map(e => PortfolioStakingUnbonding.fromAmino(e)) || [];
    message.incentivesBonds = object.incentives_bonds?.map(e => PortfolioIncentivesBond.fromAmino(e)) || [];
    message.incentivesUnbondings = object.incentives_unbondings?.map(e => PortfolioIncentivesUnbonding.fromAmino(e)) || [];
    message.allianceDelegations = object.alliance_delegations?.map(e => PortfolioAllianceDelegation.fromAmino(e)) || [];
    message.allianceUnbondings = object.alliance_unbondings?.map(e => PortfolioAllianceUnbonding.fromAmino(e)) || [];
    message.icstakingUnbondings = object.icstaking_unbondings?.map(e => PortfolioIcstakingUnbonding.fromAmino(e)) || [];
    if (object.wallet_tokens_value_in_stable_coin_terms !== undefined && object.wallet_tokens_value_in_stable_coin_terms !== null) {
      message.walletTokensValueInStableCoinTerms = object.wallet_tokens_value_in_stable_coin_terms;
    }
    if (object.y_stakings_value_in_stable_coin_terms !== undefined && object.y_stakings_value_in_stable_coin_terms !== null) {
      message.yStakingsValueInStableCoinTerms = object.y_stakings_value_in_stable_coin_terms;
    }
    if (object.y_launch_stakings_value_in_stable_coin_terms !== undefined && object.y_launch_stakings_value_in_stable_coin_terms !== null) {
      message.yLaunchStakingsValueInStableCoinTerms = object.y_launch_stakings_value_in_stable_coin_terms;
    }
    if (object.p_gov_tokens_value_in_stable_coin_terms !== undefined && object.p_gov_tokens_value_in_stable_coin_terms !== null) {
      message.pGovTokensValueInStableCoinTerms = object.p_gov_tokens_value_in_stable_coin_terms;
    }
    if (object.staking_delegations_value_in_stable_coin_terms !== undefined && object.staking_delegations_value_in_stable_coin_terms !== null) {
      message.stakingDelegationsValueInStableCoinTerms = object.staking_delegations_value_in_stable_coin_terms;
    }
    if (object.staking_unbondings_value_in_stable_coin_terms !== undefined && object.staking_unbondings_value_in_stable_coin_terms !== null) {
      message.stakingUnbondingsValueInStableCoinTerms = object.staking_unbondings_value_in_stable_coin_terms;
    }
    if (object.incentives_bonds_value_in_stable_coin_terms !== undefined && object.incentives_bonds_value_in_stable_coin_terms !== null) {
      message.incentivesBondsValueInStableCoinTerms = object.incentives_bonds_value_in_stable_coin_terms;
    }
    if (object.incentives_unbondings_value_in_stable_coin_terms !== undefined && object.incentives_unbondings_value_in_stable_coin_terms !== null) {
      message.incentivesUnbondingsValueInStableCoinTerms = object.incentives_unbondings_value_in_stable_coin_terms;
    }
    if (object.alliance_delegations_value_in_stable_coin_terms !== undefined && object.alliance_delegations_value_in_stable_coin_terms !== null) {
      message.allianceDelegationsValueInStableCoinTerms = object.alliance_delegations_value_in_stable_coin_terms;
    }
    if (object.alliance_unbondings_value_in_stable_coin_terms !== undefined && object.alliance_unbondings_value_in_stable_coin_terms !== null) {
      message.allianceUnbondingsValueInStableCoinTerms = object.alliance_unbondings_value_in_stable_coin_terms;
    }
    if (object.icstaking_unbondings_value_in_stable_coin_terms !== undefined && object.icstaking_unbondings_value_in_stable_coin_terms !== null) {
      message.icstakingUnbondingsValueInStableCoinTerms = object.icstaking_unbondings_value_in_stable_coin_terms;
    }
    if (object.total_value_in_stable_coin_terms !== undefined && object.total_value_in_stable_coin_terms !== null) {
      message.totalValueInStableCoinTerms = object.total_value_in_stable_coin_terms;
    }
    if (object.total_excluding_unbonding_value_in_stable_coin_terms !== undefined && object.total_excluding_unbonding_value_in_stable_coin_terms !== null) {
      message.totalExcludingUnbondingValueInStableCoinTerms = object.total_excluding_unbonding_value_in_stable_coin_terms;
    }
    if (object.rewards_value_in_stable_coin_terms !== undefined && object.rewards_value_in_stable_coin_terms !== null) {
      message.rewardsValueInStableCoinTerms = object.rewards_value_in_stable_coin_terms;
    }
    return message;
  },
  toAmino(message: QueryPortfolioResponse, useInterfaces: boolean = true): QueryPortfolioResponseAmino {
    const obj: any = {};
    if (message.walletTokens) {
      obj.wallet_tokens = message.walletTokens.map(e => e ? PortfolioToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.wallet_tokens = message.walletTokens;
    }
    if (message.yStakings) {
      obj.y_stakings = message.yStakings.map(e => e ? PortfolioYStaking.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_stakings = message.yStakings;
    }
    if (message.yLaunchStakings) {
      obj.y_launch_stakings = message.yLaunchStakings.map(e => e ? PortfolioYLaunchStaking.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_launch_stakings = message.yLaunchStakings;
    }
    if (message.pGovStakedTokens) {
      obj.p_gov_staked_tokens = message.pGovStakedTokens.map(e => e ? PortfolioToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.p_gov_staked_tokens = message.pGovStakedTokens;
    }
    if (message.stakingDelegations) {
      obj.staking_delegations = message.stakingDelegations.map(e => e ? PortfolioStakingDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.staking_delegations = message.stakingDelegations;
    }
    if (message.stakingUnbondings) {
      obj.staking_unbondings = message.stakingUnbondings.map(e => e ? PortfolioStakingUnbonding.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.staking_unbondings = message.stakingUnbondings;
    }
    if (message.incentivesBonds) {
      obj.incentives_bonds = message.incentivesBonds.map(e => e ? PortfolioIncentivesBond.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.incentives_bonds = message.incentivesBonds;
    }
    if (message.incentivesUnbondings) {
      obj.incentives_unbondings = message.incentivesUnbondings.map(e => e ? PortfolioIncentivesUnbonding.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.incentives_unbondings = message.incentivesUnbondings;
    }
    if (message.allianceDelegations) {
      obj.alliance_delegations = message.allianceDelegations.map(e => e ? PortfolioAllianceDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.alliance_delegations = message.allianceDelegations;
    }
    if (message.allianceUnbondings) {
      obj.alliance_unbondings = message.allianceUnbondings.map(e => e ? PortfolioAllianceUnbonding.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.alliance_unbondings = message.allianceUnbondings;
    }
    if (message.icstakingUnbondings) {
      obj.icstaking_unbondings = message.icstakingUnbondings.map(e => e ? PortfolioIcstakingUnbonding.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.icstaking_unbondings = message.icstakingUnbondings;
    }
    obj.wallet_tokens_value_in_stable_coin_terms = padDecimal(message.walletTokensValueInStableCoinTerms) === "" ? undefined : padDecimal(message.walletTokensValueInStableCoinTerms);
    obj.y_stakings_value_in_stable_coin_terms = padDecimal(message.yStakingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.yStakingsValueInStableCoinTerms);
    obj.y_launch_stakings_value_in_stable_coin_terms = padDecimal(message.yLaunchStakingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.yLaunchStakingsValueInStableCoinTerms);
    obj.p_gov_tokens_value_in_stable_coin_terms = padDecimal(message.pGovTokensValueInStableCoinTerms) === "" ? undefined : padDecimal(message.pGovTokensValueInStableCoinTerms);
    obj.staking_delegations_value_in_stable_coin_terms = padDecimal(message.stakingDelegationsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.stakingDelegationsValueInStableCoinTerms);
    obj.staking_unbondings_value_in_stable_coin_terms = padDecimal(message.stakingUnbondingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.stakingUnbondingsValueInStableCoinTerms);
    obj.incentives_bonds_value_in_stable_coin_terms = padDecimal(message.incentivesBondsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.incentivesBondsValueInStableCoinTerms);
    obj.incentives_unbondings_value_in_stable_coin_terms = padDecimal(message.incentivesUnbondingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.incentivesUnbondingsValueInStableCoinTerms);
    obj.alliance_delegations_value_in_stable_coin_terms = padDecimal(message.allianceDelegationsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.allianceDelegationsValueInStableCoinTerms);
    obj.alliance_unbondings_value_in_stable_coin_terms = padDecimal(message.allianceUnbondingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.allianceUnbondingsValueInStableCoinTerms);
    obj.icstaking_unbondings_value_in_stable_coin_terms = padDecimal(message.icstakingUnbondingsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.icstakingUnbondingsValueInStableCoinTerms);
    obj.total_value_in_stable_coin_terms = padDecimal(message.totalValueInStableCoinTerms) === "" ? undefined : padDecimal(message.totalValueInStableCoinTerms);
    obj.total_excluding_unbonding_value_in_stable_coin_terms = padDecimal(message.totalExcludingUnbondingValueInStableCoinTerms) === "" ? undefined : padDecimal(message.totalExcludingUnbondingValueInStableCoinTerms);
    obj.rewards_value_in_stable_coin_terms = padDecimal(message.rewardsValueInStableCoinTerms) === "" ? undefined : padDecimal(message.rewardsValueInStableCoinTerms);
    return obj;
  },
  fromAminoMsg(object: QueryPortfolioResponseAminoMsg): QueryPortfolioResponse {
    return QueryPortfolioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPortfolioResponseProtoMsg, useInterfaces: boolean = true): QueryPortfolioResponse {
    return QueryPortfolioResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPortfolioResponse): Uint8Array {
    return QueryPortfolioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPortfolioResponse): QueryPortfolioResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse",
      value: QueryPortfolioResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPortfolioResponse.typeUrl, QueryPortfolioResponse);