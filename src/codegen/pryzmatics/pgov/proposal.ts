import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { ProposalStatus, proposalStatusFromJSON, proposalStatusToJSON } from "../../pryzm/pgov/v1/proposal";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
export interface Proposal {
  assetId: string;
  proposalId: bigint;
  startTime?: Timestamp;
  endTime: Timestamp;
  status: ProposalStatus;
  yesWeight: string;
  abstainWeight: string;
  noWeight: string;
  noWithVetoWeight: string;
  hostEndTime?: Timestamp;
  hostFinalized: boolean;
  rawProposal: string;
}
export interface ProposalProtoMsg {
  typeUrl: "/pryzmatics.pgov.Proposal";
  value: Uint8Array;
}
export interface ProposalAmino {
  asset_id?: string;
  proposal_id?: string;
  start_time?: string;
  end_time?: string;
  status?: ProposalStatus;
  yes_weight?: string;
  abstain_weight?: string;
  no_weight?: string;
  no_with_veto_weight?: string;
  host_end_time?: string;
  host_finalized?: boolean;
  raw_proposal?: string;
}
export interface ProposalAminoMsg {
  type: "/pryzmatics.pgov.Proposal";
  value: ProposalAmino;
}
export interface ProposalSDKType {
  asset_id: string;
  proposal_id: bigint;
  start_time?: TimestampSDKType;
  end_time: TimestampSDKType;
  status: ProposalStatus;
  yes_weight: string;
  abstain_weight: string;
  no_weight: string;
  no_with_veto_weight: string;
  host_end_time?: TimestampSDKType;
  host_finalized: boolean;
  raw_proposal: string;
}
function createBaseProposal(): Proposal {
  return {
    assetId: "",
    proposalId: BigInt(0),
    startTime: undefined,
    endTime: Timestamp.fromPartial({}),
    status: 0,
    yesWeight: "",
    abstainWeight: "",
    noWeight: "",
    noWithVetoWeight: "",
    hostEndTime: undefined,
    hostFinalized: false,
    rawProposal: ""
  };
}
export const Proposal = {
  typeUrl: "/pryzmatics.pgov.Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.assetId === "string" && typeof o.proposalId === "bigint" && Timestamp.is(o.endTime) && isSet(o.status) && typeof o.yesWeight === "string" && typeof o.abstainWeight === "string" && typeof o.noWeight === "string" && typeof o.noWithVetoWeight === "string" && typeof o.hostFinalized === "boolean" && typeof o.rawProposal === "string");
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && Timestamp.isSDK(o.end_time) && isSet(o.status) && typeof o.yes_weight === "string" && typeof o.abstain_weight === "string" && typeof o.no_weight === "string" && typeof o.no_with_veto_weight === "string" && typeof o.host_finalized === "boolean" && typeof o.raw_proposal === "string");
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.asset_id === "string" && typeof o.proposal_id === "bigint" && Timestamp.isAmino(o.end_time) && isSet(o.status) && typeof o.yes_weight === "string" && typeof o.abstain_weight === "string" && typeof o.no_weight === "string" && typeof o.no_with_veto_weight === "string" && typeof o.host_finalized === "boolean" && typeof o.raw_proposal === "string");
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.yesWeight !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.yesWeight, 18).atomics);
    }
    if (message.abstainWeight !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.abstainWeight, 18).atomics);
    }
    if (message.noWeight !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.noWeight, 18).atomics);
    }
    if (message.noWithVetoWeight !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.noWithVetoWeight, 18).atomics);
    }
    if (message.hostEndTime !== undefined) {
      Timestamp.encode(message.hostEndTime, writer.uint32(82).fork()).ldelim();
    }
    if (message.hostFinalized === true) {
      writer.uint32(88).bool(message.hostFinalized);
    }
    if (message.rawProposal !== "") {
      writer.uint32(98).string(message.rawProposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
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
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = (reader.int32() as any);
          break;
        case 6:
          message.yesWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.abstainWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.noWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.noWithVetoWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.hostEndTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 11:
          message.hostFinalized = reader.bool();
          break;
        case 12:
          message.rawProposal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      yesWeight: isSet(object.yesWeight) ? String(object.yesWeight) : "",
      abstainWeight: isSet(object.abstainWeight) ? String(object.abstainWeight) : "",
      noWeight: isSet(object.noWeight) ? String(object.noWeight) : "",
      noWithVetoWeight: isSet(object.noWithVetoWeight) ? String(object.noWithVetoWeight) : "",
      hostEndTime: isSet(object.hostEndTime) ? fromJsonTimestamp(object.hostEndTime) : undefined,
      hostFinalized: isSet(object.hostFinalized) ? Boolean(object.hostFinalized) : false,
      rawProposal: isSet(object.rawProposal) ? String(object.rawProposal) : ""
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.yesWeight !== undefined && (obj.yesWeight = message.yesWeight);
    message.abstainWeight !== undefined && (obj.abstainWeight = message.abstainWeight);
    message.noWeight !== undefined && (obj.noWeight = message.noWeight);
    message.noWithVetoWeight !== undefined && (obj.noWithVetoWeight = message.noWithVetoWeight);
    message.hostEndTime !== undefined && (obj.hostEndTime = fromTimestamp(message.hostEndTime).toISOString());
    message.hostFinalized !== undefined && (obj.hostFinalized = message.hostFinalized);
    message.rawProposal !== undefined && (obj.rawProposal = message.rawProposal);
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.assetId = object.assetId ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.status = object.status ?? 0;
    message.yesWeight = object.yesWeight ?? "";
    message.abstainWeight = object.abstainWeight ?? "";
    message.noWeight = object.noWeight ?? "";
    message.noWithVetoWeight = object.noWithVetoWeight ?? "";
    message.hostEndTime = object.hostEndTime !== undefined && object.hostEndTime !== null ? Timestamp.fromPartial(object.hostEndTime) : undefined;
    message.hostFinalized = object.hostFinalized ?? false;
    message.rawProposal = object.rawProposal ?? "";
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.yes_weight !== undefined && object.yes_weight !== null) {
      message.yesWeight = object.yes_weight;
    }
    if (object.abstain_weight !== undefined && object.abstain_weight !== null) {
      message.abstainWeight = object.abstain_weight;
    }
    if (object.no_weight !== undefined && object.no_weight !== null) {
      message.noWeight = object.no_weight;
    }
    if (object.no_with_veto_weight !== undefined && object.no_with_veto_weight !== null) {
      message.noWithVetoWeight = object.no_with_veto_weight;
    }
    if (object.host_end_time !== undefined && object.host_end_time !== null) {
      message.hostEndTime = Timestamp.fromAmino(object.host_end_time);
    }
    if (object.host_finalized !== undefined && object.host_finalized !== null) {
      message.hostFinalized = object.host_finalized;
    }
    if (object.raw_proposal !== undefined && object.raw_proposal !== null) {
      message.rawProposal = object.raw_proposal;
    }
    return message;
  },
  toAmino(message: Proposal, useInterfaces: boolean = true): ProposalAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime, useInterfaces) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime, useInterfaces) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.yes_weight = padDecimal(message.yesWeight) === "" ? undefined : padDecimal(message.yesWeight);
    obj.abstain_weight = padDecimal(message.abstainWeight) === "" ? undefined : padDecimal(message.abstainWeight);
    obj.no_weight = padDecimal(message.noWeight) === "" ? undefined : padDecimal(message.noWeight);
    obj.no_with_veto_weight = padDecimal(message.noWithVetoWeight) === "" ? undefined : padDecimal(message.noWithVetoWeight);
    obj.host_end_time = message.hostEndTime ? Timestamp.toAmino(message.hostEndTime, useInterfaces) : undefined;
    obj.host_finalized = message.hostFinalized === false ? undefined : message.hostFinalized;
    obj.raw_proposal = message.rawProposal === "" ? undefined : message.rawProposal;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg, useInterfaces: boolean = true): Proposal {
    return Proposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/pryzmatics.pgov.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proposal.typeUrl, Proposal);