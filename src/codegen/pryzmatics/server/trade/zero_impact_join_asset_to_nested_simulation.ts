import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryZeroImpactJoinAssetToNestedSimulationRequest {
  amountIn: Coin;
  hostChainId: string;
  transferChannel: string;
  poolId: bigint;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationRequest";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationRequestAmino {
  amount_in?: CoinAmino;
  host_chain_id?: string;
  transfer_channel?: string;
  pool_id?: string;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationRequest";
  value: QueryZeroImpactJoinAssetToNestedSimulationRequestAmino;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationRequestSDKType {
  amount_in: CoinSDKType;
  host_chain_id: string;
  transfer_channel: string;
  pool_id: bigint;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationResponse {
  amountIn: Coin;
  lptOut: Coin;
  yOut: Coin[];
  feeAmount: Coin;
  feePercentage: string;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationResponse";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationResponseAmino {
  amount_in?: CoinAmino;
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  fee_amount?: CoinAmino;
  fee_percentage?: string;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationResponse";
  value: QueryZeroImpactJoinAssetToNestedSimulationResponseAmino;
}
export interface QueryZeroImpactJoinAssetToNestedSimulationResponseSDKType {
  amount_in: CoinSDKType;
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  fee_amount: CoinSDKType;
  fee_percentage: string;
}
function createBaseQueryZeroImpactJoinAssetToNestedSimulationRequest(): QueryZeroImpactJoinAssetToNestedSimulationRequest {
  return {
    amountIn: Coin.fromPartial({}),
    hostChainId: "",
    transferChannel: "",
    poolId: BigInt(0)
  };
}
export const QueryZeroImpactJoinAssetToNestedSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationRequest",
  is(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationRequest {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationRequest.typeUrl || Coin.is(o.amountIn) && typeof o.hostChainId === "string" && typeof o.transferChannel === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationRequest.typeUrl || Coin.isSDK(o.amount_in) && typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationRequestAmino {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationRequest.typeUrl || Coin.isAmino(o.amount_in) && typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: QueryZeroImpactJoinAssetToNestedSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(32).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryZeroImpactJoinAssetToNestedSimulationRequest): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryZeroImpactJoinAssetToNestedSimulationRequest>): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationRequest();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.hostChainId = object.hostChainId ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinAssetToNestedSimulationRequestAmino): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationRequest();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryZeroImpactJoinAssetToNestedSimulationRequest, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationRequestAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZeroImpactJoinAssetToNestedSimulationRequestAminoMsg): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    return QueryZeroImpactJoinAssetToNestedSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinAssetToNestedSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationRequest {
    return QueryZeroImpactJoinAssetToNestedSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryZeroImpactJoinAssetToNestedSimulationRequest): Uint8Array {
    return QueryZeroImpactJoinAssetToNestedSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinAssetToNestedSimulationRequest): QueryZeroImpactJoinAssetToNestedSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationRequest",
      value: QueryZeroImpactJoinAssetToNestedSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryZeroImpactJoinAssetToNestedSimulationRequest.typeUrl, QueryZeroImpactJoinAssetToNestedSimulationRequest);
function createBaseQueryZeroImpactJoinAssetToNestedSimulationResponse(): QueryZeroImpactJoinAssetToNestedSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    lptOut: Coin.fromPartial({}),
    yOut: [],
    feeAmount: Coin.fromPartial({}),
    feePercentage: ""
  };
}
export const QueryZeroImpactJoinAssetToNestedSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationResponse",
  is(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationResponse {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationResponse.typeUrl || Coin.is(o.amountIn) && Coin.is(o.lptOut) && Array.isArray(o.yOut) && (!o.yOut.length || Coin.is(o.yOut[0])) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string");
  },
  isSDK(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isSDK(o.y_out[0])) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string");
  },
  isAmino(o: any): o is QueryZeroImpactJoinAssetToNestedSimulationResponseAmino {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToNestedSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isAmino(o.y_out[0])) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string");
  },
  encode(message: QueryZeroImpactJoinAssetToNestedSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.yOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.feeAmount !== undefined) {
      Coin.encode(message.feeAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.feePercentage !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.feePercentage, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.yOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.feeAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.feePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : ""
    };
  },
  toJSON(message: QueryZeroImpactJoinAssetToNestedSimulationResponse): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.yOut) {
      obj.yOut = message.yOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yOut = [];
    }
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount ? Coin.toJSON(message.feeAmount) : undefined);
    message.feePercentage !== undefined && (obj.feePercentage = message.feePercentage);
    return obj;
  },
  fromPartial(object: Partial<QueryZeroImpactJoinAssetToNestedSimulationResponse>): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinAssetToNestedSimulationResponseAmino): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    const message = createBaseQueryZeroImpactJoinAssetToNestedSimulationResponse();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.yOut = object.y_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = Coin.fromAmino(object.fee_amount);
    }
    if (object.fee_percentage !== undefined && object.fee_percentage !== null) {
      message.feePercentage = object.fee_percentage;
    }
    return message;
  },
  toAmino(message: QueryZeroImpactJoinAssetToNestedSimulationResponse, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationResponseAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut, useInterfaces) : undefined;
    if (message.yOut) {
      obj.y_out = message.yOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_out = message.yOut;
    }
    obj.fee_amount = message.feeAmount ? Coin.toAmino(message.feeAmount, useInterfaces) : undefined;
    obj.fee_percentage = padDecimal(message.feePercentage) === "" ? undefined : padDecimal(message.feePercentage);
    return obj;
  },
  fromAminoMsg(object: QueryZeroImpactJoinAssetToNestedSimulationResponseAminoMsg): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    return QueryZeroImpactJoinAssetToNestedSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinAssetToNestedSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToNestedSimulationResponse {
    return QueryZeroImpactJoinAssetToNestedSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryZeroImpactJoinAssetToNestedSimulationResponse): Uint8Array {
    return QueryZeroImpactJoinAssetToNestedSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinAssetToNestedSimulationResponse): QueryZeroImpactJoinAssetToNestedSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToNestedSimulationResponse",
      value: QueryZeroImpactJoinAssetToNestedSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryZeroImpactJoinAssetToNestedSimulationResponse.typeUrl, QueryZeroImpactJoinAssetToNestedSimulationResponse);