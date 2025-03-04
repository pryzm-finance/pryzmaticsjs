import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PryzmClaimHistoryRecord {
  address: string;
  amount: Coin;
  blockTime: Timestamp;
}
export interface PryzmClaimHistoryRecordProtoMsg {
  typeUrl: "/pryzmatics.trade.PryzmClaimHistoryRecord";
  value: Uint8Array;
}
export interface PryzmClaimHistoryRecordAmino {
  address?: string;
  amount?: CoinAmino;
  block_time?: string;
}
export interface PryzmClaimHistoryRecordAminoMsg {
  type: "/pryzmatics.trade.PryzmClaimHistoryRecord";
  value: PryzmClaimHistoryRecordAmino;
}
export interface PryzmClaimHistoryRecordSDKType {
  address: string;
  amount: CoinSDKType;
  block_time: TimestampSDKType;
}
function createBasePryzmClaimHistoryRecord(): PryzmClaimHistoryRecord {
  return {
    address: "",
    amount: Coin.fromPartial({}),
    blockTime: Timestamp.fromPartial({})
  };
}
export const PryzmClaimHistoryRecord = {
  typeUrl: "/pryzmatics.trade.PryzmClaimHistoryRecord",
  is(o: any): o is PryzmClaimHistoryRecord {
    return o && (o.$typeUrl === PryzmClaimHistoryRecord.typeUrl || typeof o.address === "string" && Coin.is(o.amount) && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is PryzmClaimHistoryRecordSDKType {
    return o && (o.$typeUrl === PryzmClaimHistoryRecord.typeUrl || typeof o.address === "string" && Coin.isSDK(o.amount) && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is PryzmClaimHistoryRecordAmino {
    return o && (o.$typeUrl === PryzmClaimHistoryRecord.typeUrl || typeof o.address === "string" && Coin.isAmino(o.amount) && Timestamp.isAmino(o.block_time));
  },
  encode(message: PryzmClaimHistoryRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PryzmClaimHistoryRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePryzmClaimHistoryRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PryzmClaimHistoryRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: PryzmClaimHistoryRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<PryzmClaimHistoryRecord>): PryzmClaimHistoryRecord {
    const message = createBasePryzmClaimHistoryRecord();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  },
  fromAmino(object: PryzmClaimHistoryRecordAmino): PryzmClaimHistoryRecord {
    const message = createBasePryzmClaimHistoryRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    return message;
  },
  toAmino(message: PryzmClaimHistoryRecord, useInterfaces: boolean = true): PryzmClaimHistoryRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PryzmClaimHistoryRecordAminoMsg): PryzmClaimHistoryRecord {
    return PryzmClaimHistoryRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: PryzmClaimHistoryRecordProtoMsg, useInterfaces: boolean = true): PryzmClaimHistoryRecord {
    return PryzmClaimHistoryRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PryzmClaimHistoryRecord): Uint8Array {
    return PryzmClaimHistoryRecord.encode(message).finish();
  },
  toProtoMsg(message: PryzmClaimHistoryRecord): PryzmClaimHistoryRecordProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.PryzmClaimHistoryRecord",
      value: PryzmClaimHistoryRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PryzmClaimHistoryRecord.typeUrl, PryzmClaimHistoryRecord);