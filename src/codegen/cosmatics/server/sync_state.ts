import { SyncState, SyncStateAmino, SyncStateSDKType } from "../sync_state";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
export interface QuerySyncStateRequest {}
export interface QuerySyncStateRequestProtoMsg {
  typeUrl: "/cosmatics.server.QuerySyncStateRequest";
  value: Uint8Array;
}
export interface QuerySyncStateRequestAmino {}
export interface QuerySyncStateRequestAminoMsg {
  type: "/cosmatics.server.QuerySyncStateRequest";
  value: QuerySyncStateRequestAmino;
}
export interface QuerySyncStateRequestSDKType {}
export interface QuerySyncStateResponse {
  syncState: SyncState;
}
export interface QuerySyncStateResponseProtoMsg {
  typeUrl: "/cosmatics.server.QuerySyncStateResponse";
  value: Uint8Array;
}
export interface QuerySyncStateResponseAmino {
  sync_state?: SyncStateAmino;
}
export interface QuerySyncStateResponseAminoMsg {
  type: "/cosmatics.server.QuerySyncStateResponse";
  value: QuerySyncStateResponseAmino;
}
export interface QuerySyncStateResponseSDKType {
  sync_state: SyncStateSDKType;
}
function createBaseQuerySyncStateRequest(): QuerySyncStateRequest {
  return {};
}
export const QuerySyncStateRequest = {
  typeUrl: "/cosmatics.server.QuerySyncStateRequest",
  is(o: any): o is QuerySyncStateRequest {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySyncStateRequestSDKType {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySyncStateRequestAmino {
    return o && o.$typeUrl === QuerySyncStateRequest.typeUrl;
  },
  encode(_: QuerySyncStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySyncStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncStateRequest();
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
  fromJSON(_: any): QuerySyncStateRequest {
    return {};
  },
  toJSON(_: QuerySyncStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySyncStateRequest>): QuerySyncStateRequest {
    const message = createBaseQuerySyncStateRequest();
    return message;
  },
  fromAmino(_: QuerySyncStateRequestAmino): QuerySyncStateRequest {
    const message = createBaseQuerySyncStateRequest();
    return message;
  },
  toAmino(_: QuerySyncStateRequest, useInterfaces: boolean = true): QuerySyncStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySyncStateRequestAminoMsg): QuerySyncStateRequest {
    return QuerySyncStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySyncStateRequestProtoMsg, useInterfaces: boolean = true): QuerySyncStateRequest {
    return QuerySyncStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySyncStateRequest): Uint8Array {
    return QuerySyncStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySyncStateRequest): QuerySyncStateRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QuerySyncStateRequest",
      value: QuerySyncStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySyncStateRequest.typeUrl, QuerySyncStateRequest);
function createBaseQuerySyncStateResponse(): QuerySyncStateResponse {
  return {
    syncState: SyncState.fromPartial({})
  };
}
export const QuerySyncStateResponse = {
  typeUrl: "/cosmatics.server.QuerySyncStateResponse",
  is(o: any): o is QuerySyncStateResponse {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.is(o.syncState));
  },
  isSDK(o: any): o is QuerySyncStateResponseSDKType {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.isSDK(o.sync_state));
  },
  isAmino(o: any): o is QuerySyncStateResponseAmino {
    return o && (o.$typeUrl === QuerySyncStateResponse.typeUrl || SyncState.isAmino(o.sync_state));
  },
  encode(message: QuerySyncStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncState !== undefined) {
      SyncState.encode(message.syncState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySyncStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyncStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncState = SyncState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySyncStateResponse {
    return {
      syncState: isSet(object.syncState) ? SyncState.fromJSON(object.syncState) : undefined
    };
  },
  toJSON(message: QuerySyncStateResponse): unknown {
    const obj: any = {};
    message.syncState !== undefined && (obj.syncState = message.syncState ? SyncState.toJSON(message.syncState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySyncStateResponse>): QuerySyncStateResponse {
    const message = createBaseQuerySyncStateResponse();
    message.syncState = object.syncState !== undefined && object.syncState !== null ? SyncState.fromPartial(object.syncState) : undefined;
    return message;
  },
  fromAmino(object: QuerySyncStateResponseAmino): QuerySyncStateResponse {
    const message = createBaseQuerySyncStateResponse();
    if (object.sync_state !== undefined && object.sync_state !== null) {
      message.syncState = SyncState.fromAmino(object.sync_state);
    }
    return message;
  },
  toAmino(message: QuerySyncStateResponse, useInterfaces: boolean = true): QuerySyncStateResponseAmino {
    const obj: any = {};
    obj.sync_state = message.syncState ? SyncState.toAmino(message.syncState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySyncStateResponseAminoMsg): QuerySyncStateResponse {
    return QuerySyncStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySyncStateResponseProtoMsg, useInterfaces: boolean = true): QuerySyncStateResponse {
    return QuerySyncStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySyncStateResponse): Uint8Array {
    return QuerySyncStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySyncStateResponse): QuerySyncStateResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QuerySyncStateResponse",
      value: QuerySyncStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySyncStateResponse.typeUrl, QuerySyncStateResponse);