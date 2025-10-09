import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { BinaryReader, BinaryWriter } from "../binary";
import { GlobalDecoderRegistry } from "../registry";
export enum MetricType {
  ANY = 0,
  LST = 1,
  FTC = 2,
  PRC = 3,
  PPR = 4,
  BG = 5,
  UNRECOGNIZED = -1,
}
export const MetricTypeSDKType = MetricType;
export const MetricTypeAmino = MetricType;
export function metricTypeFromJSON(object: any): MetricType {
  switch (object) {
    case 0:
    case "ANY":
      return MetricType.ANY;
    case 1:
    case "LST":
      return MetricType.LST;
    case 2:
    case "FTC":
      return MetricType.FTC;
    case 3:
    case "PRC":
      return MetricType.PRC;
    case 4:
    case "PPR":
      return MetricType.PPR;
    case 5:
    case "BG":
      return MetricType.BG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricType.UNRECOGNIZED;
  }
}
export function metricTypeToJSON(object: MetricType): string {
  switch (object) {
    case MetricType.ANY:
      return "ANY";
    case MetricType.LST:
      return "LST";
    case MetricType.FTC:
      return "FTC";
    case MetricType.PRC:
      return "PRC";
    case MetricType.PPR:
      return "PPR";
    case MetricType.BG:
      return "BG";
    case MetricType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Metric {
  id: string;
  type: MetricType;
  tags: string[];
  blockTime: Timestamp;
  blockHeight: bigint;
  time: Timestamp;
  value: number;
}
export interface MetricProtoMsg {
  typeUrl: "/cosmatics.Metric";
  value: Uint8Array;
}
export interface MetricAmino {
  id?: string;
  type?: MetricType;
  tags?: string[];
  block_time?: string;
  block_height?: string;
  time?: string;
  value?: number;
}
export interface MetricAminoMsg {
  type: "/cosmatics.Metric";
  value: MetricAmino;
}
export interface MetricSDKType {
  id: string;
  type: MetricType;
  tags: string[];
  block_time: TimestampSDKType;
  block_height: bigint;
  time: TimestampSDKType;
  value: number;
}
function createBaseMetric(): Metric {
  return {
    id: "",
    type: 0,
    tags: [],
    blockTime: Timestamp.fromPartial({}),
    blockHeight: BigInt(0),
    time: Timestamp.fromPartial({}),
    value: 0
  };
}
export const Metric = {
  typeUrl: "/cosmatics.Metric",
  is(o: any): o is Metric {
    return o && (o.$typeUrl === Metric.typeUrl || typeof o.id === "string" && isSet(o.type) && Array.isArray(o.tags) && (!o.tags.length || typeof o.tags[0] === "string") && Timestamp.is(o.blockTime) && typeof o.blockHeight === "bigint" && Timestamp.is(o.time) && typeof o.value === "number");
  },
  isSDK(o: any): o is MetricSDKType {
    return o && (o.$typeUrl === Metric.typeUrl || typeof o.id === "string" && isSet(o.type) && Array.isArray(o.tags) && (!o.tags.length || typeof o.tags[0] === "string") && Timestamp.isSDK(o.block_time) && typeof o.block_height === "bigint" && Timestamp.isSDK(o.time) && typeof o.value === "number");
  },
  isAmino(o: any): o is MetricAmino {
    return o && (o.$typeUrl === Metric.typeUrl || typeof o.id === "string" && isSet(o.type) && Array.isArray(o.tags) && (!o.tags.length || typeof o.tags[0] === "string") && Timestamp.isAmino(o.block_time) && typeof o.block_height === "bigint" && Timestamp.isAmino(o.time) && typeof o.value === "number");
  },
  encode(message: Metric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== 0) {
      writer.uint32(57).double(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Metric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        case 4:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        case 6:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metric {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? metricTypeFromJSON(object.type) : -1,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = metricTypeToJSON(message.type));
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = [];
    }
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Metric>): Metric {
    const message = createBaseMetric();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.tags = object.tags?.map(e => e) || [];
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: MetricAmino): Metric {
    const message = createBaseMetric();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Metric, useInterfaces: boolean = true): MetricAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.type = message.type === 0 ? undefined : message.type;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MetricAminoMsg): Metric {
    return Metric.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricProtoMsg, useInterfaces: boolean = true): Metric {
    return Metric.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Metric): Uint8Array {
    return Metric.encode(message).finish();
  },
  toProtoMsg(message: Metric): MetricProtoMsg {
    return {
      typeUrl: "/cosmatics.Metric",
      value: Metric.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Metric.typeUrl, Metric);