import { Operation, OperationAmino, OperationSDKType } from "../../pryzmnexus/pryzmnexus";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySwapStepsRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QuerySwapStepsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest";
  value: Uint8Array;
}
export interface QuerySwapStepsRequestAmino {
  token_in?: string;
  token_out?: string;
}
export interface QuerySwapStepsRequestAminoMsg {
  type: "/pryzmatics.server.trade.QuerySwapStepsRequest";
  value: QuerySwapStepsRequestAmino;
}
export interface QuerySwapStepsRequestSDKType {
  token_in: string;
  token_out: string;
}
export interface QuerySwapStepsResponse {
  steps: Operation[];
}
export interface QuerySwapStepsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse";
  value: Uint8Array;
}
export interface QuerySwapStepsResponseAmino {
  steps?: OperationAmino[];
}
export interface QuerySwapStepsResponseAminoMsg {
  type: "/pryzmatics.server.trade.QuerySwapStepsResponse";
  value: QuerySwapStepsResponseAmino;
}
export interface QuerySwapStepsResponseSDKType {
  steps: OperationSDKType[];
}
function createBaseQuerySwapStepsRequest(): QuerySwapStepsRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QuerySwapStepsRequest = {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest",
  is(o: any): o is QuerySwapStepsRequest {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySwapStepsRequestSDKType {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySwapStepsRequestAmino {
    return o && (o.$typeUrl === QuerySwapStepsRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QuerySwapStepsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapStepsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapStepsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapStepsRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySwapStepsRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapStepsRequest>): QuerySwapStepsRequest {
    const message = createBaseQuerySwapStepsRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySwapStepsRequestAmino): QuerySwapStepsRequest {
    const message = createBaseQuerySwapStepsRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySwapStepsRequest, useInterfaces: boolean = true): QuerySwapStepsRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySwapStepsRequestAminoMsg): QuerySwapStepsRequest {
    return QuerySwapStepsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapStepsRequestProtoMsg, useInterfaces: boolean = true): QuerySwapStepsRequest {
    return QuerySwapStepsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapStepsRequest): Uint8Array {
    return QuerySwapStepsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapStepsRequest): QuerySwapStepsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QuerySwapStepsRequest",
      value: QuerySwapStepsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapStepsRequest.typeUrl, QuerySwapStepsRequest);
function createBaseQuerySwapStepsResponse(): QuerySwapStepsResponse {
  return {
    steps: []
  };
}
export const QuerySwapStepsResponse = {
  typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse",
  is(o: any): o is QuerySwapStepsResponse {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.steps) && (!o.steps.length || Operation.is(o.steps[0])));
  },
  isSDK(o: any): o is QuerySwapStepsResponseSDKType {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.steps) && (!o.steps.length || Operation.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is QuerySwapStepsResponseAmino {
    return o && (o.$typeUrl === QuerySwapStepsResponse.typeUrl || Array.isArray(o.steps) && (!o.steps.length || Operation.isAmino(o.steps[0])));
  },
  encode(message: QuerySwapStepsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySwapStepsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(Operation.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapStepsResponse {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => Operation.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySwapStepsResponse): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySwapStepsResponse>): QuerySwapStepsResponse {
    const message = createBaseQuerySwapStepsResponse();
    message.steps = object.steps?.map(e => Operation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySwapStepsResponseAmino): QuerySwapStepsResponse {
    const message = createBaseQuerySwapStepsResponse();
    message.steps = object.steps?.map(e => Operation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySwapStepsResponse, useInterfaces: boolean = true): QuerySwapStepsResponseAmino {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? Operation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySwapStepsResponseAminoMsg): QuerySwapStepsResponse {
    return QuerySwapStepsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapStepsResponseProtoMsg, useInterfaces: boolean = true): QuerySwapStepsResponse {
    return QuerySwapStepsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySwapStepsResponse): Uint8Array {
    return QuerySwapStepsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapStepsResponse): QuerySwapStepsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QuerySwapStepsResponse",
      value: QuerySwapStepsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapStepsResponse.typeUrl, QuerySwapStepsResponse);