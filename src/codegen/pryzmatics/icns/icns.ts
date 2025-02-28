import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface IcnsRecord {
  address: string;
  icns: string;
  fetchTime: Timestamp;
}
export interface IcnsRecordProtoMsg {
  typeUrl: "/pryzmatics.icns.IcnsRecord";
  value: Uint8Array;
}
export interface IcnsRecordAmino {
  address?: string;
  icns?: string;
  fetch_time?: string;
}
export interface IcnsRecordAminoMsg {
  type: "/pryzmatics.icns.IcnsRecord";
  value: IcnsRecordAmino;
}
export interface IcnsRecordSDKType {
  address: string;
  icns: string;
  fetch_time: TimestampSDKType;
}
function createBaseIcnsRecord(): IcnsRecord {
  return {
    address: "",
    icns: "",
    fetchTime: Timestamp.fromPartial({})
  };
}
export const IcnsRecord = {
  typeUrl: "/pryzmatics.icns.IcnsRecord",
  is(o: any): o is IcnsRecord {
    return o && (o.$typeUrl === IcnsRecord.typeUrl || typeof o.address === "string" && typeof o.icns === "string" && Timestamp.is(o.fetchTime));
  },
  isSDK(o: any): o is IcnsRecordSDKType {
    return o && (o.$typeUrl === IcnsRecord.typeUrl || typeof o.address === "string" && typeof o.icns === "string" && Timestamp.isSDK(o.fetch_time));
  },
  isAmino(o: any): o is IcnsRecordAmino {
    return o && (o.$typeUrl === IcnsRecord.typeUrl || typeof o.address === "string" && typeof o.icns === "string" && Timestamp.isAmino(o.fetch_time));
  },
  encode(message: IcnsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.icns !== "") {
      writer.uint32(18).string(message.icns);
    }
    if (message.fetchTime !== undefined) {
      Timestamp.encode(message.fetchTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): IcnsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcnsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.icns = reader.string();
          break;
        case 3:
          message.fetchTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IcnsRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      icns: isSet(object.icns) ? String(object.icns) : "",
      fetchTime: isSet(object.fetchTime) ? fromJsonTimestamp(object.fetchTime) : undefined
    };
  },
  toJSON(message: IcnsRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.icns !== undefined && (obj.icns = message.icns);
    message.fetchTime !== undefined && (obj.fetchTime = fromTimestamp(message.fetchTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<IcnsRecord>): IcnsRecord {
    const message = createBaseIcnsRecord();
    message.address = object.address ?? "";
    message.icns = object.icns ?? "";
    message.fetchTime = object.fetchTime !== undefined && object.fetchTime !== null ? Timestamp.fromPartial(object.fetchTime) : undefined;
    return message;
  },
  fromAmino(object: IcnsRecordAmino): IcnsRecord {
    const message = createBaseIcnsRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.icns !== undefined && object.icns !== null) {
      message.icns = object.icns;
    }
    if (object.fetch_time !== undefined && object.fetch_time !== null) {
      message.fetchTime = Timestamp.fromAmino(object.fetch_time);
    }
    return message;
  },
  toAmino(message: IcnsRecord, useInterfaces: boolean = true): IcnsRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.icns = message.icns === "" ? undefined : message.icns;
    obj.fetch_time = message.fetchTime ? Timestamp.toAmino(message.fetchTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: IcnsRecordAminoMsg): IcnsRecord {
    return IcnsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: IcnsRecordProtoMsg, useInterfaces: boolean = true): IcnsRecord {
    return IcnsRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IcnsRecord): Uint8Array {
    return IcnsRecord.encode(message).finish();
  },
  toProtoMsg(message: IcnsRecord): IcnsRecordProtoMsg {
    return {
      typeUrl: "/pryzmatics.icns.IcnsRecord",
      value: IcnsRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IcnsRecord.typeUrl, IcnsRecord);