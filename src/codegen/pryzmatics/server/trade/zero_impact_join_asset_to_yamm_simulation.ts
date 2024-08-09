import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryZeroImpactJoinAssetToYammSimulationRequest {
  amountIn: Coin;
  /** leave the host_chain, and channel empty for contract staking */
  hostChainId: string;
  transferChannel: string;
}
export interface QueryZeroImpactJoinAssetToYammSimulationRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationRequest";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinAssetToYammSimulationRequestAmino {
  amount_in?: CoinAmino;
  /** leave the host_chain, and channel empty for contract staking */
  host_chain_id?: string;
  transfer_channel?: string;
}
export interface QueryZeroImpactJoinAssetToYammSimulationRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationRequest";
  value: QueryZeroImpactJoinAssetToYammSimulationRequestAmino;
}
export interface QueryZeroImpactJoinAssetToYammSimulationRequestSDKType {
  amount_in: CoinSDKType;
  host_chain_id: string;
  transfer_channel: string;
}
export interface QueryZeroImpactJoinAssetToYammSimulationResponse {
  amountIn: Coin;
  lptOut: Coin;
  yOut: Coin[];
  feeAmount: Coin;
  feePercentage: string;
}
export interface QueryZeroImpactJoinAssetToYammSimulationResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationResponse";
  value: Uint8Array;
}
export interface QueryZeroImpactJoinAssetToYammSimulationResponseAmino {
  amount_in?: CoinAmino;
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  fee_amount?: CoinAmino;
  fee_percentage?: string;
}
export interface QueryZeroImpactJoinAssetToYammSimulationResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationResponse";
  value: QueryZeroImpactJoinAssetToYammSimulationResponseAmino;
}
export interface QueryZeroImpactJoinAssetToYammSimulationResponseSDKType {
  amount_in: CoinSDKType;
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  fee_amount: CoinSDKType;
  fee_percentage: string;
}
function createBaseQueryZeroImpactJoinAssetToYammSimulationRequest(): QueryZeroImpactJoinAssetToYammSimulationRequest {
  return {
    amountIn: Coin.fromPartial({}),
    hostChainId: "",
    transferChannel: ""
  };
}
export const QueryZeroImpactJoinAssetToYammSimulationRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationRequest",
  is(o: any): o is QueryZeroImpactJoinAssetToYammSimulationRequest {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationRequest.typeUrl || Coin.is(o.amountIn) && typeof o.hostChainId === "string" && typeof o.transferChannel === "string");
  },
  isSDK(o: any): o is QueryZeroImpactJoinAssetToYammSimulationRequestSDKType {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationRequest.typeUrl || Coin.isSDK(o.amount_in) && typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string");
  },
  isAmino(o: any): o is QueryZeroImpactJoinAssetToYammSimulationRequestAmino {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationRequest.typeUrl || Coin.isAmino(o.amount_in) && typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string");
  },
  encode(message: QueryZeroImpactJoinAssetToYammSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZeroImpactJoinAssetToYammSimulationRequest {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : ""
    };
  },
  toJSON(message: QueryZeroImpactJoinAssetToYammSimulationRequest): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    return obj;
  },
  fromPartial(object: Partial<QueryZeroImpactJoinAssetToYammSimulationRequest>): QueryZeroImpactJoinAssetToYammSimulationRequest {
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationRequest();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.hostChainId = object.hostChainId ?? "";
    message.transferChannel = object.transferChannel ?? "";
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinAssetToYammSimulationRequestAmino): QueryZeroImpactJoinAssetToYammSimulationRequest {
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationRequest();
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    return message;
  },
  toAmino(message: QueryZeroImpactJoinAssetToYammSimulationRequest, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationRequestAmino {
    const obj: any = {};
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    return obj;
  },
  fromAminoMsg(object: QueryZeroImpactJoinAssetToYammSimulationRequestAminoMsg): QueryZeroImpactJoinAssetToYammSimulationRequest {
    return QueryZeroImpactJoinAssetToYammSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinAssetToYammSimulationRequestProtoMsg, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationRequest {
    return QueryZeroImpactJoinAssetToYammSimulationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryZeroImpactJoinAssetToYammSimulationRequest): Uint8Array {
    return QueryZeroImpactJoinAssetToYammSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinAssetToYammSimulationRequest): QueryZeroImpactJoinAssetToYammSimulationRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationRequest",
      value: QueryZeroImpactJoinAssetToYammSimulationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryZeroImpactJoinAssetToYammSimulationRequest.typeUrl, QueryZeroImpactJoinAssetToYammSimulationRequest);
function createBaseQueryZeroImpactJoinAssetToYammSimulationResponse(): QueryZeroImpactJoinAssetToYammSimulationResponse {
  return {
    amountIn: Coin.fromPartial({}),
    lptOut: Coin.fromPartial({}),
    yOut: [],
    feeAmount: Coin.fromPartial({}),
    feePercentage: ""
  };
}
export const QueryZeroImpactJoinAssetToYammSimulationResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationResponse",
  is(o: any): o is QueryZeroImpactJoinAssetToYammSimulationResponse {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationResponse.typeUrl || Coin.is(o.amountIn) && Coin.is(o.lptOut) && Array.isArray(o.yOut) && (!o.yOut.length || Coin.is(o.yOut[0])) && Coin.is(o.feeAmount) && typeof o.feePercentage === "string");
  },
  isSDK(o: any): o is QueryZeroImpactJoinAssetToYammSimulationResponseSDKType {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationResponse.typeUrl || Coin.isSDK(o.amount_in) && Coin.isSDK(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isSDK(o.y_out[0])) && Coin.isSDK(o.fee_amount) && typeof o.fee_percentage === "string");
  },
  isAmino(o: any): o is QueryZeroImpactJoinAssetToYammSimulationResponseAmino {
    return o && (o.$typeUrl === QueryZeroImpactJoinAssetToYammSimulationResponse.typeUrl || Coin.isAmino(o.amount_in) && Coin.isAmino(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isAmino(o.y_out[0])) && Coin.isAmino(o.fee_amount) && typeof o.fee_percentage === "string");
  },
  encode(message: QueryZeroImpactJoinAssetToYammSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationResponse();
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
  fromJSON(object: any): QueryZeroImpactJoinAssetToYammSimulationResponse {
    return {
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      feeAmount: isSet(object.feeAmount) ? Coin.fromJSON(object.feeAmount) : undefined,
      feePercentage: isSet(object.feePercentage) ? String(object.feePercentage) : ""
    };
  },
  toJSON(message: QueryZeroImpactJoinAssetToYammSimulationResponse): unknown {
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
  fromPartial(object: Partial<QueryZeroImpactJoinAssetToYammSimulationResponse>): QueryZeroImpactJoinAssetToYammSimulationResponse {
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationResponse();
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.feeAmount = object.feeAmount !== undefined && object.feeAmount !== null ? Coin.fromPartial(object.feeAmount) : undefined;
    message.feePercentage = object.feePercentage ?? "";
    return message;
  },
  fromAmino(object: QueryZeroImpactJoinAssetToYammSimulationResponseAmino): QueryZeroImpactJoinAssetToYammSimulationResponse {
    const message = createBaseQueryZeroImpactJoinAssetToYammSimulationResponse();
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
  toAmino(message: QueryZeroImpactJoinAssetToYammSimulationResponse, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationResponseAmino {
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
  fromAminoMsg(object: QueryZeroImpactJoinAssetToYammSimulationResponseAminoMsg): QueryZeroImpactJoinAssetToYammSimulationResponse {
    return QueryZeroImpactJoinAssetToYammSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZeroImpactJoinAssetToYammSimulationResponseProtoMsg, useInterfaces: boolean = true): QueryZeroImpactJoinAssetToYammSimulationResponse {
    return QueryZeroImpactJoinAssetToYammSimulationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryZeroImpactJoinAssetToYammSimulationResponse): Uint8Array {
    return QueryZeroImpactJoinAssetToYammSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZeroImpactJoinAssetToYammSimulationResponse): QueryZeroImpactJoinAssetToYammSimulationResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryZeroImpactJoinAssetToYammSimulationResponse",
      value: QueryZeroImpactJoinAssetToYammSimulationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryZeroImpactJoinAssetToYammSimulationResponse.typeUrl, QueryZeroImpactJoinAssetToYammSimulationResponse);