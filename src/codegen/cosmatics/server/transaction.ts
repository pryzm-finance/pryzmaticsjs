import { GetTxResponse, GetTxResponseAmino, GetTxResponseSDKType } from "../../cosmos/tx/v1beta1/service";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface QueryTransactionStatusRequest {
  hash: string;
  timeoutBlock: bigint;
}
export interface QueryTransactionStatusRequestProtoMsg {
  typeUrl: "/cosmatics.server.QueryTransactionStatusRequest";
  value: Uint8Array;
}
export interface QueryTransactionStatusRequestAmino {
  hash?: string;
  timeout_block?: string;
}
export interface QueryTransactionStatusRequestAminoMsg {
  type: "/cosmatics.server.QueryTransactionStatusRequest";
  value: QueryTransactionStatusRequestAmino;
}
export interface QueryTransactionStatusRequestSDKType {
  hash: string;
  timeout_block: bigint;
}
export interface QueryTransactionStatusResponse {
  found: boolean;
  timedOut: boolean;
  response?: GetTxResponse;
}
export interface QueryTransactionStatusResponseProtoMsg {
  typeUrl: "/cosmatics.server.QueryTransactionStatusResponse";
  value: Uint8Array;
}
export interface QueryTransactionStatusResponseAmino {
  found?: boolean;
  timed_out?: boolean;
  response?: GetTxResponseAmino;
}
export interface QueryTransactionStatusResponseAminoMsg {
  type: "/cosmatics.server.QueryTransactionStatusResponse";
  value: QueryTransactionStatusResponseAmino;
}
export interface QueryTransactionStatusResponseSDKType {
  found: boolean;
  timed_out: boolean;
  response?: GetTxResponseSDKType;
}
function createBaseQueryTransactionStatusRequest(): QueryTransactionStatusRequest {
  return {
    hash: "",
    timeoutBlock: BigInt(0)
  };
}
export const QueryTransactionStatusRequest = {
  typeUrl: "/cosmatics.server.QueryTransactionStatusRequest",
  is(o: any): o is QueryTransactionStatusRequest {
    return o && (o.$typeUrl === QueryTransactionStatusRequest.typeUrl || typeof o.hash === "string" && typeof o.timeoutBlock === "bigint");
  },
  isSDK(o: any): o is QueryTransactionStatusRequestSDKType {
    return o && (o.$typeUrl === QueryTransactionStatusRequest.typeUrl || typeof o.hash === "string" && typeof o.timeout_block === "bigint");
  },
  isAmino(o: any): o is QueryTransactionStatusRequestAmino {
    return o && (o.$typeUrl === QueryTransactionStatusRequest.typeUrl || typeof o.hash === "string" && typeof o.timeout_block === "bigint");
  },
  encode(message: QueryTransactionStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.timeoutBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.timeoutBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTransactionStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.timeoutBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTransactionStatusRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      timeoutBlock: isSet(object.timeoutBlock) ? BigInt(object.timeoutBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTransactionStatusRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.timeoutBlock !== undefined && (obj.timeoutBlock = (message.timeoutBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTransactionStatusRequest>): QueryTransactionStatusRequest {
    const message = createBaseQueryTransactionStatusRequest();
    message.hash = object.hash ?? "";
    message.timeoutBlock = object.timeoutBlock !== undefined && object.timeoutBlock !== null ? BigInt(object.timeoutBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTransactionStatusRequestAmino): QueryTransactionStatusRequest {
    const message = createBaseQueryTransactionStatusRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.timeout_block !== undefined && object.timeout_block !== null) {
      message.timeoutBlock = BigInt(object.timeout_block);
    }
    return message;
  },
  toAmino(message: QueryTransactionStatusRequest, useInterfaces: boolean = true): QueryTransactionStatusRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.timeout_block = message.timeoutBlock ? message.timeoutBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTransactionStatusRequestAminoMsg): QueryTransactionStatusRequest {
    return QueryTransactionStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTransactionStatusRequestProtoMsg, useInterfaces: boolean = true): QueryTransactionStatusRequest {
    return QueryTransactionStatusRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTransactionStatusRequest): Uint8Array {
    return QueryTransactionStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTransactionStatusRequest): QueryTransactionStatusRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryTransactionStatusRequest",
      value: QueryTransactionStatusRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTransactionStatusRequest.typeUrl, QueryTransactionStatusRequest);
function createBaseQueryTransactionStatusResponse(): QueryTransactionStatusResponse {
  return {
    found: false,
    timedOut: false,
    response: undefined
  };
}
export const QueryTransactionStatusResponse = {
  typeUrl: "/cosmatics.server.QueryTransactionStatusResponse",
  is(o: any): o is QueryTransactionStatusResponse {
    return o && (o.$typeUrl === QueryTransactionStatusResponse.typeUrl || typeof o.found === "boolean" && typeof o.timedOut === "boolean");
  },
  isSDK(o: any): o is QueryTransactionStatusResponseSDKType {
    return o && (o.$typeUrl === QueryTransactionStatusResponse.typeUrl || typeof o.found === "boolean" && typeof o.timed_out === "boolean");
  },
  isAmino(o: any): o is QueryTransactionStatusResponseAmino {
    return o && (o.$typeUrl === QueryTransactionStatusResponse.typeUrl || typeof o.found === "boolean" && typeof o.timed_out === "boolean");
  },
  encode(message: QueryTransactionStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.found === true) {
      writer.uint32(8).bool(message.found);
    }
    if (message.timedOut === true) {
      writer.uint32(16).bool(message.timedOut);
    }
    if (message.response !== undefined) {
      GetTxResponse.encode(message.response, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTransactionStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransactionStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.found = reader.bool();
          break;
        case 2:
          message.timedOut = reader.bool();
          break;
        case 3:
          message.response = GetTxResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTransactionStatusResponse {
    return {
      found: isSet(object.found) ? Boolean(object.found) : false,
      timedOut: isSet(object.timedOut) ? Boolean(object.timedOut) : false,
      response: isSet(object.response) ? GetTxResponse.fromJSON(object.response) : undefined
    };
  },
  toJSON(message: QueryTransactionStatusResponse): unknown {
    const obj: any = {};
    message.found !== undefined && (obj.found = message.found);
    message.timedOut !== undefined && (obj.timedOut = message.timedOut);
    message.response !== undefined && (obj.response = message.response ? GetTxResponse.toJSON(message.response) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTransactionStatusResponse>): QueryTransactionStatusResponse {
    const message = createBaseQueryTransactionStatusResponse();
    message.found = object.found ?? false;
    message.timedOut = object.timedOut ?? false;
    message.response = object.response !== undefined && object.response !== null ? GetTxResponse.fromPartial(object.response) : undefined;
    return message;
  },
  fromAmino(object: QueryTransactionStatusResponseAmino): QueryTransactionStatusResponse {
    const message = createBaseQueryTransactionStatusResponse();
    if (object.found !== undefined && object.found !== null) {
      message.found = object.found;
    }
    if (object.timed_out !== undefined && object.timed_out !== null) {
      message.timedOut = object.timed_out;
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = GetTxResponse.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message: QueryTransactionStatusResponse, useInterfaces: boolean = true): QueryTransactionStatusResponseAmino {
    const obj: any = {};
    obj.found = message.found === false ? undefined : message.found;
    obj.timed_out = message.timedOut === false ? undefined : message.timedOut;
    obj.response = message.response ? GetTxResponse.toAmino(message.response, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTransactionStatusResponseAminoMsg): QueryTransactionStatusResponse {
    return QueryTransactionStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTransactionStatusResponseProtoMsg, useInterfaces: boolean = true): QueryTransactionStatusResponse {
    return QueryTransactionStatusResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTransactionStatusResponse): Uint8Array {
    return QueryTransactionStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTransactionStatusResponse): QueryTransactionStatusResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryTransactionStatusResponse",
      value: QueryTransactionStatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTransactionStatusResponse.typeUrl, QueryTransactionStatusResponse);