import { VoteOrderBy, VoteOrderByAmino, VoteOrderBySDKType } from "../../database/pgov/vote";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Vote, VoteAmino, VoteSDKType } from "../../../pryzm/pgov/v1/vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPGovVotesRequest {
  assetId: string;
  proposalId: bigint;
  voter: string;
  orderBy?: VoteOrderBy;
  pagination?: PageRequest;
}
export interface QueryPGovVotesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesRequest";
  value: Uint8Array;
}
export interface QueryPGovVotesRequestAmino {
  asset_id?: string;
  proposal_id?: string;
  voter?: string;
  order_by?: VoteOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryPGovVotesRequestAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovVotesRequest";
  value: QueryPGovVotesRequestAmino;
}
export interface QueryPGovVotesRequestSDKType {
  asset_id: string;
  proposal_id: bigint;
  voter: string;
  order_by?: VoteOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryPGovVotesResponse {
  votes: Vote[];
  pagination?: PageResponse;
}
export interface QueryPGovVotesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesResponse";
  value: Uint8Array;
}
export interface QueryPGovVotesResponseAmino {
  votes?: VoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPGovVotesResponseAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovVotesResponse";
  value: QueryPGovVotesResponseAmino;
}
export interface QueryPGovVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPGovVotesRequest(): QueryPGovVotesRequest {
  return {
    assetId: "",
    proposalId: BigInt(0),
    voter: "",
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryPGovVotesRequest = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesRequest",
  is(o: any): o is QueryPGovVotesRequest {
    return o && (o.$typeUrl === QueryPGovVotesRequest.typeUrl || typeof o.assetId === "string" && typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isSDK(o: any): o is QueryPGovVotesRequestSDKType {
    return o && (o.$typeUrl === QueryPGovVotesRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryPGovVotesRequestAmino {
    return o && (o.$typeUrl === QueryPGovVotesRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryPGovVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    if (message.orderBy !== undefined) {
      VoteOrderBy.encode(message.orderBy, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.voter = reader.string();
          break;
        case 4:
          message.orderBy = VoteOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPGovVotesRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      orderBy: isSet(object.orderBy) ? VoteOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPGovVotesRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? VoteOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPGovVotesRequest>): QueryPGovVotesRequest {
    const message = createBaseQueryPGovVotesRequest();
    message.assetId = object.assetId ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? VoteOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPGovVotesRequestAmino): QueryPGovVotesRequest {
    const message = createBaseQueryPGovVotesRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = VoteOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPGovVotesRequest, useInterfaces: boolean = true): QueryPGovVotesRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.order_by = message.orderBy ? VoteOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovVotesRequestAminoMsg): QueryPGovVotesRequest {
    return QueryPGovVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovVotesRequestProtoMsg, useInterfaces: boolean = true): QueryPGovVotesRequest {
    return QueryPGovVotesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovVotesRequest): Uint8Array {
    return QueryPGovVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovVotesRequest): QueryPGovVotesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesRequest",
      value: QueryPGovVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovVotesRequest.typeUrl, QueryPGovVotesRequest);
function createBaseQueryPGovVotesResponse(): QueryPGovVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryPGovVotesResponse = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesResponse",
  is(o: any): o is QueryPGovVotesResponse {
    return o && (o.$typeUrl === QueryPGovVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isSDK(o: any): o is QueryPGovVotesResponseSDKType {
    return o && (o.$typeUrl === QueryPGovVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
  },
  isAmino(o: any): o is QueryPGovVotesResponseAmino {
    return o && (o.$typeUrl === QueryPGovVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryPGovVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPGovVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPGovVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPGovVotesResponse>): QueryPGovVotesResponse {
    const message = createBaseQueryPGovVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPGovVotesResponseAmino): QueryPGovVotesResponse {
    const message = createBaseQueryPGovVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPGovVotesResponse, useInterfaces: boolean = true): QueryPGovVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovVotesResponseAminoMsg): QueryPGovVotesResponse {
    return QueryPGovVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovVotesResponseProtoMsg, useInterfaces: boolean = true): QueryPGovVotesResponse {
    return QueryPGovVotesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovVotesResponse): Uint8Array {
    return QueryPGovVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovVotesResponse): QueryPGovVotesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovVotesResponse",
      value: QueryPGovVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovVotesResponse.typeUrl, QueryPGovVotesResponse);