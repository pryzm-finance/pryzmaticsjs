import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryRecoveryExitSimulationRequest {
  poolId: bigint;
  lptInAmount: string;
}
export interface QueryRecoveryExitSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationRequest";
  value: Uint8Array;
}
export interface QueryRecoveryExitSimulationRequestAmino {
  pool_id?: string;
  lpt_in_amount?: string;
}
export interface QueryRecoveryExitSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryRecoveryExitSimulationRequest";
  value: QueryRecoveryExitSimulationRequestAmino;
}
export interface QueryRecoveryExitSimulationRequestSDKType {
  pool_id: bigint;
  lpt_in_amount: string;
}
export interface QueryRecoveryExitSimulationResponse {
  amountsOut: Coin[];
  amountIn: Coin;
  feeAmount: Coin;
  feePercentage: string;
  priceImpact: string;
}
export interface QueryRecoveryExitSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationResponse";
  value: Uint8Array;
}
export interface QueryRecoveryExitSimulationResponseAmino {
  amounts_out?: CoinAmino[];
  amount_in?: CoinAmino;
  fee_amount?: CoinAmino;
  fee_percentage?: string;
  price_impact?: string;
}
export interface QueryRecoveryExitSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryRecoveryExitSimulationResponse";
  value: QueryRecoveryExitSimulationResponseAmino;
}
export interface QueryRecoveryExitSimulationResponseSDKType {
  amounts_out: CoinSDKType[];
  amount_in: CoinSDKType;
  fee_amount: CoinSDKType;
  fee_percentage: string;
  price_impact: string;
}
function createBaseQueryRecoveryExitSimulationRequest(): QueryRecoveryExitSimulationRequest {
  return {
    poolId: BigInt(0),
    lptInAmount: ""
  };
}
export const QueryRecoveryExitSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationRequest",
  is(o: any): o is QueryRecoveryExitSimulationRequest {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptInAmount === "string");
  },
  isSDK(o: any): o is QueryRecoveryExitSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string");
  },
  isAmino(o: any): o is QueryRecoveryExitSimulationRequestAmino {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in_amount === "string");
  },
  encode(message: QueryRecoveryExitSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptInAmount !== "") {
      writer.uint32(18).string(message.lptInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRecoveryExitSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecoveryExitSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRecoveryExitSimulationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptInAmount: isSet(object.lptInAmount) ? String(object.lptInAmount) : ""
    };
  },
  toJSON(message: QueryRecoveryExitSimulationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptInAmount !== undefined && (obj.lptInAmount = message.lptInAmount);
    return obj;
  },
  fromPartial(object: Partial<QueryRecoveryExitSimulationRequest>): QueryRecoveryExitSimulationRequest {
    const message = createBaseQueryRecoveryExitSimulationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptInAmount = object.lptInAmount ?? "";
    return message;
  },
  fromAmino(object: QueryRecoveryExitSimulationRequestAmino): QueryRecoveryExitSimulationRequest {
    const message = createBaseQueryRecoveryExitSimulationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in_amount !== undefined && object.lpt_in_amount !== null) {
      message.lptInAmount = object.lpt_in_amount;
    }
    return message;
  },
  toAmino(message: QueryRecoveryExitSimulationRequest, useInterfaces: boolean = true): QueryRecoveryExitSimulationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in_amount = message.lptInAmount === "" ? undefined : message.lptInAmount;
    return obj;
  },
  fromAminoMsg(object: QueryRecoveryExitSimulationRequestAminoMsg): QueryRecoveryExitSimulationRequest {
    return QueryRecoveryExitSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecoveryExitSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryRecoveryExitSimulationRequest {
    return QueryRecoveryExitSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRecoveryExitSimulationRequest): Uint8Array {
    return QueryRecoveryExitSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecoveryExitSimulationRequest): QueryRecoveryExitSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationRequest",
      value: QueryRecoveryExitSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRecoveryExitSimulationRequest.typeUrl, QueryRecoveryExitSimulationRequest);
function createBaseQueryRecoveryExitSimulationResponse(): QueryRecoveryExitSimulationResponse {
  return {
    amountsOut: [],
    amountIn: Coin.fromPartial({}),
    feeAmount: Coin.fromPartial({}),
    feePercentage: "",
    priceImpact: ""
  };
}
export const QueryRecoveryExitSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationResponse",
  is(o: any): o is QueryRecoveryExitSimulationResponse {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationResponse.typeUrl || Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.amountIn) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string" && typeof o.priceImpact === "string");
  },
  isSDK(o: any): o is QueryRecoveryExitSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  isAmino(o: any): o is QueryRecoveryExitSimulationResponseAmino {
    return o && (o.$typeUrl === QueryRecoveryExitSimulationResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string" && typeof o.price_impact === "string");
  },
  encode(message: QueryRecoveryExitSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRecoveryExitSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecoveryExitSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRecoveryExitSimulationResponse {
    return {
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : ""
    };
  },
  toJSON(message: QueryRecoveryExitSimulationResponse): unknown {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    return obj;
  },
  fromPartial(object: Partial<QueryRecoveryExitSimulationResponse>): QueryRecoveryExitSimulationResponse {
    const message = createBaseQueryRecoveryExitSimulationResponse();
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    return message;
  },
  fromAmino(object: QueryRecoveryExitSimulationResponseAmino): QueryRecoveryExitSimulationResponse {
    const message = createBaseQueryRecoveryExitSimulationResponse();
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
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
    return message;
  },
  toAmino(message: QueryRecoveryExitSimulationResponse, useInterfaces: boolean = true): QueryRecoveryExitSimulationResponseAmino {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    obj.price_impact = padDecimal(message.priceImpact) === "" ? undefined : padDecimal(message.priceImpact);
    return obj;
  },
  fromAminoMsg(object: QueryRecoveryExitSimulationResponseAminoMsg): QueryRecoveryExitSimulationResponse {
    return QueryRecoveryExitSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecoveryExitSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryRecoveryExitSimulationResponse {
    return QueryRecoveryExitSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRecoveryExitSimulationResponse): Uint8Array {
    return QueryRecoveryExitSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecoveryExitSimulationResponse): QueryRecoveryExitSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryRecoveryExitSimulationResponse",
      value: QueryRecoveryExitSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRecoveryExitSimulationResponse.typeUrl, QueryRecoveryExitSimulationResponse);