import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pryzmAmmV1TxRegistry from "./amm/v1/tx.registry";
import * as pryzmIcstakingV1TxRegistry from "./icstaking/v1/tx.registry";
import * as pryzmPgovV1TxRegistry from "./pgov/v1/tx.registry";
import * as pryzmAmmV1TxAmino from "./amm/v1/tx.amino";
import * as pryzmIcstakingV1TxAmino from "./icstaking/v1/tx.amino";
import * as pryzmPgovV1TxAmino from "./pgov/v1/tx.amino";
export const pryzmAminoConverters = {
  ...pryzmAmmV1TxAmino.AminoConverter,
  ...pryzmIcstakingV1TxAmino.AminoConverter,
  ...pryzmPgovV1TxAmino.AminoConverter
};
export const pryzmProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...pryzmAmmV1TxRegistry.registry, ...pryzmIcstakingV1TxRegistry.registry, ...pryzmPgovV1TxRegistry.registry];
export const getSigningPryzmClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...pryzmProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pryzmAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPryzmClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningPryzmClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};