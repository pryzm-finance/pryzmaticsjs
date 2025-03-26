import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Operation, OperationAmino, OperationSDKType } from "../../pryzmnexus/pryzmnexus";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface PurchaseSummary {
  amountIn: Coin;
  amountOut: Coin;
  fees: Coin[];
  discountYield: Coin;
  discountYieldInUnderlyingTerms: Coin;
  rewardAmount: string;
  mintedReward?: Coin;
  userAddress: string;
}
export interface PurchaseSummaryProtoMsg {
  typeUrl: "/pryzmatics.server.pvault.PurchaseSummary";
  value: Uint8Array;
}
export interface PurchaseSummaryAmino {
  amount_in?: CoinAmino;
  amount_out?: CoinAmino;
  fees?: CoinAmino[];
  discount_yield?: CoinAmino;
  discount_yield_in_underlying_terms?: CoinAmino;
  reward_amount?: string;
  minted_reward?: CoinAmino;
  user_address?: string;
}
export interface PurchaseSummaryAminoMsg {
  type: "/pryzmatics.server.pvault.PurchaseSummary";
  value: PurchaseSummaryAmino;
}
export interface PurchaseSummarySDKType {
  amount_in: CoinSDKType;
  amount_out: CoinSDKType;
  fees: CoinSDKType[];
  discount_yield: CoinSDKType;
  discount_yield_in_underlying_terms: CoinSDKType;
  reward_amount: string;
  minted_reward?: CoinSDKType;
  user_address: string;
}
export interface QueryPurchaseSimulationRequest {
  tokenIn: string;
  tokenOut: string;
  amount: string;
  steps: Operation[];
}
export interface QueryPurchaseSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationRequest";
  value: Uint8Array;
}
export interface QueryPurchaseSimulationRequestAmino {
  token_in?: string;
  token_out?: string;
  amount?: string;
  steps?: OperationAmino[];
}
export interface QueryPurchaseSimulationRequestAminoMsg {
  type: "/pryzmatics.server.pvault.QueryPurchaseSimulationRequest";
  value: QueryPurchaseSimulationRequestAmino;
}
export interface QueryPurchaseSimulationRequestSDKType {
  token_in: string;
  token_out: string;
  amount: string;
  steps: OperationSDKType[];
}
export interface QueryPurchaseSimulationResponse {
  purchaseSummary: PurchaseSummary;
  priceTokenInTokenOutTerms: string;
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
  swapSteps: Operation[];
  error: string;
}
export interface QueryPurchaseSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationResponse";
  value: Uint8Array;
}
export interface QueryPurchaseSimulationResponseAmino {
  purchase_summary?: PurchaseSummaryAmino;
  price_token_in_token_out_terms?: string;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
  swap_steps?: OperationAmino[];
  error?: string;
}
export interface QueryPurchaseSimulationResponseAminoMsg {
  type: "/pryzmatics.server.pvault.QueryPurchaseSimulationResponse";
  value: QueryPurchaseSimulationResponseAmino;
}
export interface QueryPurchaseSimulationResponseSDKType {
  purchase_summary: PurchaseSummarySDKType;
  price_token_in_token_out_terms: string;
  fee_amount: CoinSDKType;
  fee_percentage: string;
  price_impact: string;
  swap_steps: OperationSDKType[];
  error: string;
}
function createBasePurchaseSummary(): PurchaseSummary {
  return {
    amountIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    fees: [],
    discountYield: Coin.fromPartial({}),
    discountYieldInUnderlyingTerms: Coin.fromPartial({}),
    rewardAmount: "",
    mintedReward: undefined,
    userAddress: ""
  };
}
export const PurchaseSummary = {
  typeUrl: "/pryzmatics.server.pvault.PurchaseSummary",
  is(o: any): o is PurchaseSummary {
    return o && (o.$typeUrl === PurchaseSummary.typeUrl || Coin.is(o.amountIn) && Coin.is(o.amountOut) && Array.isArray(o.fees) && (!o.fees.length || Coin.is(o.fees[0])) && Coin.is(o.discountYield) && Coin.is(o.discountYieldInUnderlyingTerms) && typeof o.rewardAmount === "string" && typeof o.userAddress === "string");
  },
  isSDK(o: any): o is PurchaseSummarySDKType {
    return o && (o.$typeUrl === PurchaseSummary.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.amount_out) && Array.isArray(o.fees) && (!o.fees.length || Coin.isSDK(o.fees[0])) && Coin.isSDK(o.discount_yield) && Coin.isSDK(o.discount_yield_in_underlying_terms) && typeof o.reward_amount === "string" && typeof o.user_address === "string");
  },
  isAmino(o: any): o is PurchaseSummaryAmino {
    return o && (o.$typeUrl === PurchaseSummary.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.amount_out) && Array.isArray(o.fees) && (!o.fees.length || Coin.isAmino(o.fees[0])) && Coin.isAmino(o.discount_yield) && Coin.isAmino(o.discount_yield_in_underlying_terms) && typeof o.reward_amount === "string" && typeof o.user_address === "string");
  },
  encode(message: PurchaseSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.discountYield !== undefined) {
      Coin.encode(message.discountYield, writer.uint32(34).fork()).ldelim();
    }
    if (message.discountYieldInUnderlyingTerms !== undefined) {
      Coin.encode(message.discountYieldInUnderlyingTerms, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(50).string(message.rewardAmount);
    }
    if (message.mintedReward !== undefined) {
      Coin.encode(message.mintedReward, writer.uint32(58).fork()).ldelim();
    }
    if (message.userAddress !== "") {
      writer.uint32(66).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PurchaseSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchaseSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.fees.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.discountYield = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.discountYieldInUnderlyingTerms = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.rewardAmount = reader.string();
          break;
        case 7:
          message.mintedReward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PurchaseSummary {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
      discountYield: isSet(object.discountYield) ? Coin.fromJSON(object.discountYield) : undefined,
      discountYieldInUnderlyingTerms: isSet(object.discountYieldInUnderlyingTerms) ? Coin.fromJSON(object.discountYieldInUnderlyingTerms) : undefined,
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      mintedReward: isSet(object.mintedReward) ? Coin.fromJSON(object.mintedReward) : undefined,
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : ""
    };
  },
  toJSON(message: PurchaseSummary): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.discountYield !== undefined && (obj.discountYield = message.discountYield ? Coin.toJSON(message.discountYield) : undefined);
    message.discountYieldInUnderlyingTerms !== undefined && (obj.discountYieldInUnderlyingTerms = message.discountYieldInUnderlyingTerms ? Coin.toJSON(message.discountYieldInUnderlyingTerms) : undefined);
    message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
    message.mintedReward !== undefined && (obj.mintedReward = message.mintedReward ? Coin.toJSON(message.mintedReward) : undefined);
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    return obj;
  },
  fromPartial(object: Partial<PurchaseSummary>): PurchaseSummary {
    const message = createBasePurchaseSummary();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    message.discountYield = object.discountYield !== undefined && object.discountYield !== null ? Coin.fromPartial(object.discountYield) : undefined;
    message.discountYieldInUnderlyingTerms = object.discountYieldInUnderlyingTerms !== undefined && object.discountYieldInUnderlyingTerms !== null ? Coin.fromPartial(object.discountYieldInUnderlyingTerms) : undefined;
    message.rewardAmount = object.rewardAmount ?? "";
    message.mintedReward = object.mintedReward !== undefined && object.mintedReward !== null ? Coin.fromPartial(object.mintedReward) : undefined;
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: PurchaseSummaryAmino): PurchaseSummary {
    const message = createBasePurchaseSummary();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    message.fees = object.fees?.map(e => Coin.fromAmino(e)) || [];
    if (object.discount_yield !== undefined && object.discount_yield !== null) {
      message.discountYield = Coin.fromAmino(object.discount_yield);
    }
    if (object.discount_yield_in_underlying_terms !== undefined && object.discount_yield_in_underlying_terms !== null) {
      message.discountYieldInUnderlyingTerms = Coin.fromAmino(object.discount_yield_in_underlying_terms);
    }
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.minted_reward !== undefined && object.minted_reward !== null) {
      message.mintedReward = Coin.fromAmino(object.minted_reward);
    }
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: PurchaseSummary, useInterfaces: boolean = true): PurchaseSummaryAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fees = message.fees;
    }
    obj.discount_yield = message.discountYield ? Coin.toAmino(message.discountYield, useInterfaces) : undefined;
    obj.discount_yield_in_underlying_terms = message.discountYieldInUnderlyingTerms ? Coin.toAmino(message.discountYieldInUnderlyingTerms, useInterfaces) : undefined;
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.minted_reward = message.mintedReward ? Coin.toAmino(message.mintedReward, useInterfaces) : undefined;
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: PurchaseSummaryAminoMsg): PurchaseSummary {
    return PurchaseSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: PurchaseSummaryProtoMsg, useInterfaces: boolean = true): PurchaseSummary {
    return PurchaseSummary.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PurchaseSummary): Uint8Array {
    return PurchaseSummary.encode(message).finish();
  },
  toProtoMsg(message: PurchaseSummary): PurchaseSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pvault.PurchaseSummary",
      value: PurchaseSummary.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PurchaseSummary.typeUrl, PurchaseSummary);
function createBaseQueryPurchaseSimulationRequest(): QueryPurchaseSimulationRequest {
  return {
    tokenIn: "",
    tokenOut: "",
    amount: "",
    steps: []
  };
}
export const QueryPurchaseSimulationRequest = {
  typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationRequest",
  is(o: any): o is QueryPurchaseSimulationRequest {
    return o && (o.$typeUrl === QueryPurchaseSimulationRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || Operation.is(o.steps[0])));
  },
  isSDK(o: any): o is QueryPurchaseSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryPurchaseSimulationRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || Operation.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is QueryPurchaseSimulationRequestAmino {
    return o && (o.$typeUrl === QueryPurchaseSimulationRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.amount === "string" && Array.isArray(o.steps) && (!o.steps.length || Operation.isAmino(o.steps[0])));
  },
  encode(message: QueryPurchaseSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    for (const v of message.steps) {
      Operation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPurchaseSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPurchaseSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.steps.push(Operation.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPurchaseSimulationRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => Operation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPurchaseSimulationRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPurchaseSimulationRequest>): QueryPurchaseSimulationRequest {
    const message = createBaseQueryPurchaseSimulationRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.amount = object.amount ?? "";
    message.steps = object.steps?.map(e => Operation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPurchaseSimulationRequestAmino): QueryPurchaseSimulationRequest {
    const message = createBaseQueryPurchaseSimulationRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.steps = object.steps?.map(e => Operation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPurchaseSimulationRequest, useInterfaces: boolean = true): QueryPurchaseSimulationRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? Operation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseSimulationRequestAminoMsg): QueryPurchaseSimulationRequest {
    return QueryPurchaseSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryPurchaseSimulationRequest {
    return QueryPurchaseSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPurchaseSimulationRequest): Uint8Array {
    return QueryPurchaseSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseSimulationRequest): QueryPurchaseSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationRequest",
      value: QueryPurchaseSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPurchaseSimulationRequest.typeUrl, QueryPurchaseSimulationRequest);
function createBaseQueryPurchaseSimulationResponse(): QueryPurchaseSimulationResponse {
  return {
    purchaseSummary: PurchaseSummary.fromPartial({}),
    priceTokenInTokenOutTerms: "",
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: "",
    swapSteps: [],
    error: ""
  };
}
export const QueryPurchaseSimulationResponse = {
  typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationResponse",
  is(o: any): o is QueryPurchaseSimulationResponse {
    return o && (o.$typeUrl === QueryPurchaseSimulationResponse.typeUrl || PurchaseSummary.is(o.purchaseSummary) && typeof o.priceTokenInTokenOutTerms === "string" && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string" && Array.isArray(o.swapSteps) && (!o.swapSteps.length || Operation.is(o.swapSteps[0])) && typeof o.error === "string");
  },
  isSDK(o: any): o is QueryPurchaseSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryPurchaseSimulationResponse.typeUrl || PurchaseSummary.isSDK(o.purchase_summary) && typeof o.price_token_in_token_out_terms === "string" && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string" && Array.isArray(o.swap_steps) && (!o.swap_steps.length || Operation.isSDK(o.swap_steps[0])) && typeof o.error === "string");
  },
  isAmino(o: any): o is QueryPurchaseSimulationResponseAmino {
    return o && (o.$typeUrl === QueryPurchaseSimulationResponse.typeUrl || PurchaseSummary.isAmino(o.purchase_summary) && typeof o.price_token_in_token_out_terms === "string" && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string" && Array.isArray(o.swap_steps) && (!o.swap_steps.length || Operation.isAmino(o.swap_steps[0])) && typeof o.error === "string");
  },
  encode(message: QueryPurchaseSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseSummary !== undefined) {
      PurchaseSummary.encode(message.purchaseSummary, writer.uint32(10).fork()).ldelim();
    }
    if (message.priceTokenInTokenOutTerms !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.priceTokenInTokenOutTerms, 18).atomics);
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.feePercentage !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    for (const v of message.swapSteps) {
      Operation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPurchaseSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPurchaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseSummary = PurchaseSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.priceTokenInTokenOutTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.feeAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.feePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.swapSteps.push(Operation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPurchaseSimulationResponse {
    return {
      purchaseSummary: isSet(object.purchaseSummary) ? PurchaseSummary.fromJSON(object.purchaseSummary) : undefined,
      priceTokenInTokenOutTerms: isSet(object.priceTokenInTokenOutTerms) ? String(object.priceTokenInTokenOutTerms) : "",
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : "",
      swapSteps: Array.isArray(object?.swapSteps) ? object.swapSteps.map((e: any) => Operation.fromJSON(e)) : [],
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: QueryPurchaseSimulationResponse): unknown {
    const obj: any = {};
    message.purchaseSummary !== undefined && (obj.purchaseSummary = message.purchaseSummary ? PurchaseSummary.toJSON(message.purchaseSummary) : undefined);
    message.priceTokenInTokenOutTerms !== undefined && (obj.priceTokenInTokenOutTerms = message.priceTokenInTokenOutTerms);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    if (message.swapSteps) {
      obj.swapSteps = message.swapSteps.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.swapSteps = [];
    }
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<QueryPurchaseSimulationResponse>): QueryPurchaseSimulationResponse {
    const message = createBaseQueryPurchaseSimulationResponse();
    message.purchaseSummary = object.purchaseSummary !== undefined && object.purchaseSummary !== null ? PurchaseSummary.fromPartial(object.purchaseSummary) : undefined;
    message.priceTokenInTokenOutTerms = object.priceTokenInTokenOutTerms ?? "";
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    message.swapSteps = object.swapSteps?.map(e => Operation.fromPartial(e)) || [];
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: QueryPurchaseSimulationResponseAmino): QueryPurchaseSimulationResponse {
    const message = createBaseQueryPurchaseSimulationResponse();
    if (object.purchase_summary !== undefined && object.purchase_summary !== null) {
      message.purchaseSummary = PurchaseSummary.fromAmino(object.purchase_summary);
    }
    if (object.price_token_in_token_out_terms !== undefined && object.price_token_in_token_out_terms !== null) {
      message.priceTokenInTokenOutTerms = object.price_token_in_token_out_terms;
    }
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = Coin.fromAmino(object.fee_amount);
    }
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    message.swapSteps = object.swap_steps?.map(e => Operation.fromAmino(e)) || [];
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: QueryPurchaseSimulationResponse, useInterfaces: boolean = true): QueryPurchaseSimulationResponseAmino {
    const obj: any = {};
    obj.purchase_summary = message.purchaseSummary ? PurchaseSummary.toAmino(message.purchaseSummary, useInterfaces) : undefined;
    obj.price_token_in_token_out_terms = padDecimal(message.priceTokenInTokenOutTerms) === "" ? undefined : padDecimal(message.priceTokenInTokenOutTerms);
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    if (message.swapSteps) {
      obj.swap_steps = message.swapSteps.map(e => e ? Operation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_steps = message.swapSteps;
    }
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: QueryPurchaseSimulationResponseAminoMsg): QueryPurchaseSimulationResponse {
    return QueryPurchaseSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPurchaseSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryPurchaseSimulationResponse {
    return QueryPurchaseSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPurchaseSimulationResponse): Uint8Array {
    return QueryPurchaseSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPurchaseSimulationResponse): QueryPurchaseSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pvault.QueryPurchaseSimulationResponse",
      value: QueryPurchaseSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPurchaseSimulationResponse.typeUrl, QueryPurchaseSimulationResponse);