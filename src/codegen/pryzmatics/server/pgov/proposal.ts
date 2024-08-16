import { ProposalOrderBy, ProposalOrderByAmino, ProposalOrderBySDKType } from "../../database/pgov/proposal";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Proposal, ProposalAmino, ProposalSDKType } from "../../pgov/proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPGovProposalsRequest {
  assetId: string;
  orderBy?: ProposalOrderBy;
  pagination?: PageRequest;
}
export interface QueryPGovProposalsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsRequest";
  value: Uint8Array;
}
export interface QueryPGovProposalsRequestAmino {
  asset_id?: string;
  order_by?: ProposalOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryPGovProposalsRequestAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovProposalsRequest";
  value: QueryPGovProposalsRequestAmino;
}
export interface QueryPGovProposalsRequestSDKType {
  asset_id: string;
  order_by?: ProposalOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryPGovProposalsResponse {
  proposals: Proposal[];
  pagination?: PageResponse;
}
export interface QueryPGovProposalsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsResponse";
  value: Uint8Array;
}
export interface QueryPGovProposalsResponseAmino {
  proposals?: ProposalAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPGovProposalsResponseAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovProposalsResponse";
  value: QueryPGovProposalsResponseAmino;
}
export interface QueryPGovProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryPGovProposalRequest {
  assetId: string;
  proposalId: bigint;
}
export interface QueryPGovProposalRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalRequest";
  value: Uint8Array;
}
export interface QueryPGovProposalRequestAmino {
  asset_id?: string;
  proposal_id?: string;
}
export interface QueryPGovProposalRequestAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovProposalRequest";
  value: QueryPGovProposalRequestAmino;
}
export interface QueryPGovProposalRequestSDKType {
  asset_id: string;
  proposal_id: bigint;
}
export interface QueryPGovProposalResponse {
  proposal: Proposal;
}
export interface QueryPGovProposalResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalResponse";
  value: Uint8Array;
}
export interface QueryPGovProposalResponseAmino {
  proposal?: ProposalAmino;
}
export interface QueryPGovProposalResponseAminoMsg {
  type: "/pryzmatics.server.pgov.QueryPGovProposalResponse";
  value: QueryPGovProposalResponseAmino;
}
export interface QueryPGovProposalResponseSDKType {
  proposal: ProposalSDKType;
}
function createBaseQueryPGovProposalsRequest(): QueryPGovProposalsRequest {
  return {
    assetId: "",
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryPGovProposalsRequest = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsRequest",
  is(o: any): o is QueryPGovProposalsRequest {
    return o && (o.$typeUrl === QueryPGovProposalsRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryPGovProposalsRequestSDKType {
    return o && (o.$typeUrl === QueryPGovProposalsRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryPGovProposalsRequestAmino {
    return o && (o.$typeUrl === QueryPGovProposalsRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryPGovProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.orderBy !== undefined) {
      ProposalOrderBy.encode(message.orderBy, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.orderBy = ProposalOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPGovProposalsRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      orderBy: isSet(object.orderBy) ? ProposalOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPGovProposalsRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? ProposalOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPGovProposalsRequest>): QueryPGovProposalsRequest {
    const message = createBaseQueryPGovProposalsRequest();
    message.assetId = object.assetId ?? "";
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? ProposalOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPGovProposalsRequestAmino): QueryPGovProposalsRequest {
    const message = createBaseQueryPGovProposalsRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = ProposalOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPGovProposalsRequest, useInterfaces: boolean = true): QueryPGovProposalsRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.order_by = message.orderBy ? ProposalOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovProposalsRequestAminoMsg): QueryPGovProposalsRequest {
    return QueryPGovProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovProposalsRequestProtoMsg, useInterfaces: boolean = true): QueryPGovProposalsRequest {
    return QueryPGovProposalsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovProposalsRequest): Uint8Array {
    return QueryPGovProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovProposalsRequest): QueryPGovProposalsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsRequest",
      value: QueryPGovProposalsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovProposalsRequest.typeUrl, QueryPGovProposalsRequest);
function createBaseQueryPGovProposalsResponse(): QueryPGovProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryPGovProposalsResponse = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsResponse",
  is(o: any): o is QueryPGovProposalsResponse {
    return o && (o.$typeUrl === QueryPGovProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isSDK(o: any): o is QueryPGovProposalsResponseSDKType {
    return o && (o.$typeUrl === QueryPGovProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
  },
  isAmino(o: any): o is QueryPGovProposalsResponseAmino {
    return o && (o.$typeUrl === QueryPGovProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryPGovProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPGovProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPGovProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPGovProposalsResponse>): QueryPGovProposalsResponse {
    const message = createBaseQueryPGovProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPGovProposalsResponseAmino): QueryPGovProposalsResponse {
    const message = createBaseQueryPGovProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPGovProposalsResponse, useInterfaces: boolean = true): QueryPGovProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovProposalsResponseAminoMsg): QueryPGovProposalsResponse {
    return QueryPGovProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovProposalsResponseProtoMsg, useInterfaces: boolean = true): QueryPGovProposalsResponse {
    return QueryPGovProposalsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovProposalsResponse): Uint8Array {
    return QueryPGovProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovProposalsResponse): QueryPGovProposalsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalsResponse",
      value: QueryPGovProposalsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovProposalsResponse.typeUrl, QueryPGovProposalsResponse);
function createBaseQueryPGovProposalRequest(): QueryPGovProposalRequest {
  return {
    assetId: "",
    proposalId: BigInt(0)
  };
}
export const QueryPGovProposalRequest = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalRequest",
  is(o: any): o is QueryPGovProposalRequest {
    return o && (o.$typeUrl === QueryPGovProposalRequest.typeUrl || typeof o.assetId === "string" && typeof o.proposalId === "bigint");
  },
  isSDK(o: any): o is QueryPGovProposalRequestSDKType {
    return o && (o.$typeUrl === QueryPGovProposalRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint");
  },
  isAmino(o: any): o is QueryPGovProposalRequestAmino {
    return o && (o.$typeUrl === QueryPGovProposalRequest.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint");
  },
  encode(message: QueryPGovProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPGovProposalRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPGovProposalRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPGovProposalRequest>): QueryPGovProposalRequest {
    const message = createBaseQueryPGovProposalRequest();
    message.assetId = object.assetId ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPGovProposalRequestAmino): QueryPGovProposalRequest {
    const message = createBaseQueryPGovProposalRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryPGovProposalRequest, useInterfaces: boolean = true): QueryPGovProposalRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovProposalRequestAminoMsg): QueryPGovProposalRequest {
    return QueryPGovProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovProposalRequestProtoMsg, useInterfaces: boolean = true): QueryPGovProposalRequest {
    return QueryPGovProposalRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovProposalRequest): Uint8Array {
    return QueryPGovProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovProposalRequest): QueryPGovProposalRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalRequest",
      value: QueryPGovProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovProposalRequest.typeUrl, QueryPGovProposalRequest);
function createBaseQueryPGovProposalResponse(): QueryPGovProposalResponse {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const QueryPGovProposalResponse = {
  typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalResponse",
  is(o: any): o is QueryPGovProposalResponse {
    return o && (o.$typeUrl === QueryPGovProposalResponse.typeUrl || Proposal.is(o.proposal));
  },
  isSDK(o: any): o is QueryPGovProposalResponseSDKType {
    return o && (o.$typeUrl === QueryPGovProposalResponse.typeUrl || Proposal.isSDK(o.proposal));
  },
  isAmino(o: any): o is QueryPGovProposalResponseAmino {
    return o && (o.$typeUrl === QueryPGovProposalResponse.typeUrl || Proposal.isAmino(o.proposal));
  },
  encode(message: QueryPGovProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPGovProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPGovProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPGovProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: QueryPGovProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPGovProposalResponse>): QueryPGovProposalResponse {
    const message = createBaseQueryPGovProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: QueryPGovProposalResponseAmino): QueryPGovProposalResponse {
    const message = createBaseQueryPGovProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryPGovProposalResponse, useInterfaces: boolean = true): QueryPGovProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPGovProposalResponseAminoMsg): QueryPGovProposalResponse {
    return QueryPGovProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPGovProposalResponseProtoMsg, useInterfaces: boolean = true): QueryPGovProposalResponse {
    return QueryPGovProposalResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPGovProposalResponse): Uint8Array {
    return QueryPGovProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPGovProposalResponse): QueryPGovProposalResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pgov.QueryPGovProposalResponse",
      value: QueryPGovProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPGovProposalResponse.typeUrl, QueryPGovProposalResponse);