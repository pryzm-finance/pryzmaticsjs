import { QueryVoteIntervalReportRequest, QueryVoteIntervalReportResponseSDKType } from "./oracle/vote_interval_report";
import { QueryAllFlowRequest, QueryAllFlowResponseSDKType, QueryFlowRequest, QueryFlowResponseSDKType } from "./flowtrade/flowtrade";
import { QueryAddressesByCategoryRequest, QueryAddressesByCategoryResponseSDKType } from "./common/addresses";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryAssetRequest, QueryAssetResponseSDKType, QueryAssetsRequest, QueryAssetsResponseSDKType } from "./asset/asset";
import { QueryAssetsDetailsRequest, QueryAssetsDetailsResponseSDKType } from "./asset/assets_details";
import { QueryAllMaturitiesRequest, QueryAllMaturitiesResponseSDKType } from "./maturity/maturity";
import { QueryPGovProposalsRequest, QueryPGovProposalsResponseSDKType, QueryPGovProposalRequest, QueryPGovProposalResponseSDKType } from "./pgov/proposal";
import { QueryPGovVotesRequest, QueryPGovVotesResponseSDKType } from "./pgov/vote";
import { QueryPoolTokenRequest, QueryPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType } from "./pool/pool_token";
import { QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./pool/pool";
import { QueryTokenRequest, QueryTokenResponseSDKType, QueryTokensRequest, QueryTokensResponseSDKType } from "./pool/token";
import { QueryHistoricalTokenYieldRequest, QueryHistoricalTokenYieldResponseSDKType } from "./pool/historical_token_yield";
import { QueryHistoricalPoolAprRequest, QueryHistoricalPoolAprResponseSDKType } from "./pool/historical_pool_apr";
import { QueryTokenYieldsRequest, QueryTokenYieldsResponseSDKType } from "./pool/token_yield";
import { QueryPriceRequest, QueryPriceResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType } from "./price/price";
import { QueryHistoricalPriceRequest, QueryHistoricalPriceResponseSDKType } from "./price/historical_price";
import { QueryHistoricalNavRequest, QueryHistoricalNavResponseSDKType } from "./price/historical_nav";
import { QueryHistoricalMarketCapRequest, QueryHistoricalMarketCapResponseSDKType } from "./statistics/historical_market_cap";
import { QuerySwappableTokensRequest, QuerySwappableTokensResponseSDKType } from "./price/swappable_tokens";
import { QueryPriceBoundsRequest, QueryPriceBoundsResponseSDKType } from "./price/price_bounds";
import { QueryTradeSimulationRequest, QueryTradeSimulationResponseSDKType } from "./trade/trade_simulation";
import { QuerySwapStepsRequest, QuerySwapStepsResponseSDKType } from "./trade/swap_steps";
import { QueryJoinAllTokensExactLptSimulationRequest, QueryJoinAllTokensExactLptSimulationResponseSDKType } from "./trade/join_all_tokens_exact_lpt_simulation";
import { QueryRecoveryExitSimulationRequest, QueryRecoveryExitSimulationResponseSDKType } from "./trade/recovery_exit_simulation";
import { QueryJoinExactTokensSimulationRequest, QueryJoinExactTokensSimulationResponseSDKType } from "./trade/join_exact_tokens_simulation";
import { QueryJoinTokenExactLptSimulationRequest, QueryJoinTokenExactLptSimulationResponseSDKType } from "./trade/join_token_exact_lpt_simulation";
import { QueryZeroImpactJoinYammSimulationRequest, QueryZeroImpactJoinYammSimulationResponseSDKType } from "./trade/zero_impact_join_yamm_simulation";
import { QueryZeroImpactJoinAssetToNestedSimulationRequest, QueryZeroImpactJoinAssetToNestedSimulationResponseSDKType } from "./trade/zero_impact_join_asset_to_nested_simulation";
import { QueryZeroImpactJoinAssetToYammSimulationRequest, QueryZeroImpactJoinAssetToYammSimulationResponseSDKType } from "./trade/zero_impact_join_asset_to_yamm_simulation";
import { QueryExitTokenExactLptSimulationRequest, QueryExitTokenExactLptSimulationResponseSDKType } from "./trade/exit_token_exact_lpt_simulation";
import { QueryExitExactTokensSimulationRequest, QueryExitExactTokensSimulationResponseSDKType } from "./trade/exit_exact_tokens_simulation";
import { QueryExitAllTokensExactLptSimulationRequest, QueryExitAllTokensExactLptSimulationResponseSDKType } from "./trade/exit_all_tokens_exact_lpt_simulation";
import { QueryUserTradeHistoryRequest, QueryUserTradeHistoryResponseSDKType, QueryUserTradeHistorySummaryRequest, QueryUserTradeHistorySummaryResponseSDKType, QueryUserTradeVolumeRequest, QueryUserTradeVolumeResponseSDKType, QueryIntervalUserTradeVolumeRequest, QueryIntervalUserTradeVolumeResponseSDKType } from "./trade/user_trade_history";
import { QueryTokenTradeVolumeRequest, QueryTokenTradeVolumeResponseSDKType, QueryPoolTradeVolumeRequest, QueryPoolTradeVolumeResponseSDKType, QueryFavoritePairsRequest, QueryFavoritePairsResponseSDKType } from "./trade/trade_volume";
import { QueryPulseTradablePairsRequest, QueryPulseTradablePairsResponseSDKType, QueryPulseTradablePairPriceRequest, QueryPulseTradablePairPriceResponseSDKType } from "./trade/pulse_tradable_pairs";
import { QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryMatchableOrderCountsRequest, QueryMatchableOrderCountsResponseSDKType, QueryMatchableOrdersForPairRequest, QueryMatchableOrdersForPairResponseSDKType, QueryMatchableBuyOrdersForPairRequest, QueryMatchableBuyOrdersForPairResponseSDKType, QueryMatchableBuyOrdersForPairSummaryRequest, QueryMatchableBuyOrdersForPairSummaryResponseSDKType, QueryOrderPairsToDisableRequest, QueryOrderPairsToDisableResponseSDKType, QueryOrderPairMetricsRequest, QueryOrderPairMetricsResponseSDKType, QueryOrderPairPriceBucketsRequest, QueryOrderPairPriceBucketsResponseSDKType, QueryOrderMetricsRequest, QueryOrderMetricsResponseSDKType } from "./trade/order";
import { QueryDirectlyConnectedTokenPairsRequest, QueryDirectlyConnectedTokenPairsResponseSDKType } from "./trade/directly_connected_token_pairs";
import { QueryTickersRequest, QueryTickersResponseSDKType } from "./trade/tickers";
import { QueryUserPairTradeVolumeRequest, QueryUserPairTradeVolumeResponseSDKType } from "./trade/user_pair_trade_volume";
import { QueryHostChainUnbondingTimeRequest, QueryHostChainUnbondingTimeResponseSDKType, QueryHostChainRequest, QueryHostChainResponseSDKType, QueryHostChainsRequest, QueryHostChainsResponseSDKType, QueryHostChainByUnderlyingDenomRequest, QueryHostChainByUnderlyingDenomResponseSDKType } from "./icstaking/host_chain";
import { QueryPoolTotalIncentivesRequest, QueryPoolTotalIncentivesResponseSDKType } from "./incentives/incentives";
import { QueryValidatorRequest, QueryValidatorResponseSDKType, QueryValidatorsRequest, QueryValidatorsResponseSDKType } from "./oracle/validator";
import { QueryVoteIntervalsRequest, QueryVoteIntervalsResponseSDKType } from "./oracle/vote_interval";
import { QuerySlashWindowsRequest, QuerySlashWindowsResponseSDKType } from "./oracle/slash_window";
import { QueryVoteSummaryRequest, QueryVoteSummaryResponseSDKType } from "./oracle/vote_summary";
import { QueryValidatorVoteIntervalSummariesRequest, QueryValidatorVoteIntervalSummariesResponseSDKType } from "./oracle/validator_vote_interval_summary";
import { QueryValidatorSlashWindowSummariesRequest, QueryValidatorSlashWindowSummariesResponseSDKType } from "./oracle/validator_slash_window_summary";
import { QueryPreVotesRequest, QueryPreVotesResponseSDKType } from "./oracle/pre_vote";
import { QueryVotesRequest, QueryVotesResponseSDKType } from "./oracle/vote";
import { QueryVotePayloadsRequest, QueryVotePayloadsResponseSDKType } from "./oracle/vote_payload";
import { QueryBallotVoteResultsRequest, QueryBallotVoteResultsResponseSDKType } from "./oracle/ballot_vote_result";
import { QuerySlashWindowAnalysisRequest, QuerySlashWindowAnalysisResponseSDKType } from "./oracle/slash_window_analysis";
import { QueryUserStakesRequest, QueryUserStakesResponseSDKType } from "./ystaking/user_stake";
import { QueryClaimRequest, QueryClaimResponseSDKType } from "./faucet/claim";
import { QueryFlowHistoricalPriceRequest, QueryFlowHistoricalPriceResponseSDKType } from "./flowtrade/flow_historical_price";
import { QueryConfigRequest, QueryConfigResponseSDKType } from "./common/config";
import { QueryProposalRequest, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponseSDKType } from "./gov/proposal";
import { QueryProposalVotesRequest, QueryProposalVotesResponseSDKType } from "./gov/vote";
import { QueryStatisticsRequest, QueryStatisticsResponseSDKType } from "./statistics/statistics";
import { QueryHistoricalBankSupplyRequest, QueryHistoricalBankSupplyResponseSDKType } from "./bank/historical_bank_supply";
import { QueryPortfolioRequest, QueryPortfolioResponseSDKType } from "./portfolio/portfolio";
import { QueryIcnsByAddressRequest, QueryIcnsByAddressResponseSDKType, QueryIcnsByNameRequest, QueryIcnsByNameResponseSDKType } from "./icns/icns";
import { QueryUserPulseTradeVolumeRequest, QueryUserPulseTradeVolumeResponseSDKType } from "./trade/user_pulse_trade_volume";
import { QueryUserPryzmClaimHistoryRequest, QueryUserPryzmClaimHistoryResponseSDKType } from "./trade/user_pryzm_claim_history";
import { QueryPVaultContractsRequest, QueryPVaultContractsResponseSDKType } from "./pvault/contracts";
import { QueryPurchaseSimulationRequest, QueryPurchaseSimulationResponseSDKType } from "./pvault/purchase_simulation";
import { QuerySealOrdersRequest, QuerySealOrdersResponseSDKType } from "./seal/order";
import { QuerySealPairsRequest, QuerySealPairsResponseSDKType, QuerySealPairSummaryRequest, QuerySealPairSummaryResponseSDKType, QuerySealPairPriceRequest, QuerySealPairPriceResponseSDKType } from "./seal/pair";
import { QuerySealReservationsRequest, QuerySealReservationsResponseSDKType } from "./seal/reservation";
import { QuerySealOrderActivitiesRequest, QuerySealOrderActivitiesResponseSDKType, QuerySealReservationSettlementActivitiesRequest, QuerySealReservationSettlementActivitiesResponseSDKType } from "./seal/activity";
import { DenomOwnersRequest, DenomOwnersResponseSDKType } from "./bank/denom_owners";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType } from "./wasm/contract_info";
import { QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponseSDKType } from "./thirdparty/coingecko/circulating_supply";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.asset = this.asset.bind(this);
    this.assets = this.assets.bind(this);
    this.assetsDetails = this.assetsDetails.bind(this);
    this.maturityAll = this.maturityAll.bind(this);
    this.pGovProposals = this.pGovProposals.bind(this);
    this.pGovProposal = this.pGovProposal.bind(this);
    this.pGovVotes = this.pGovVotes.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokens = this.poolTokens.bind(this);
    this.pool = this.pool.bind(this);
    this.pools = this.pools.bind(this);
    this.token = this.token.bind(this);
    this.tokens = this.tokens.bind(this);
    this.historicalTokenYield = this.historicalTokenYield.bind(this);
    this.historicalPoolApr = this.historicalPoolApr.bind(this);
    this.tokenYields = this.tokenYields.bind(this);
    this.tokenPrice = this.tokenPrice.bind(this);
    this.tokenPrices = this.tokenPrices.bind(this);
    this.historicalPrice = this.historicalPrice.bind(this);
    this.historicalNav = this.historicalNav.bind(this);
    this.historicalMarketCap = this.historicalMarketCap.bind(this);
    this.swappableTokens = this.swappableTokens.bind(this);
    this.priceBounds = this.priceBounds.bind(this);
    this.tradeSimulation = this.tradeSimulation.bind(this);
    this.swapSteps = this.swapSteps.bind(this);
    this.joinAllTokensExactLptSimulation = this.joinAllTokensExactLptSimulation.bind(this);
    this.recoveryExitSimulation = this.recoveryExitSimulation.bind(this);
    this.joinExactTokensSimulation = this.joinExactTokensSimulation.bind(this);
    this.joinTokenExactLptSimulation = this.joinTokenExactLptSimulation.bind(this);
    this.zeroImpactJoinYammSimulation = this.zeroImpactJoinYammSimulation.bind(this);
    this.zeroImpactJoinAssetToNestedSimulation = this.zeroImpactJoinAssetToNestedSimulation.bind(this);
    this.zeroImpactJoinAssetToYammSimulation = this.zeroImpactJoinAssetToYammSimulation.bind(this);
    this.exitTokenExactLptSimulation = this.exitTokenExactLptSimulation.bind(this);
    this.exitExactTokensSimulation = this.exitExactTokensSimulation.bind(this);
    this.exitAllTokensExactLptSimulation = this.exitAllTokensExactLptSimulation.bind(this);
    this.userTradeHistory = this.userTradeHistory.bind(this);
    this.userTradeHistorySummary = this.userTradeHistorySummary.bind(this);
    this.userTradeVolume = this.userTradeVolume.bind(this);
    this.intervalUserTradeVolume = this.intervalUserTradeVolume.bind(this);
    this.tokenTradeVolume = this.tokenTradeVolume.bind(this);
    this.poolTradeVolume = this.poolTradeVolume.bind(this);
    this.favoritePairs = this.favoritePairs.bind(this);
    this.pulseTradablePairs = this.pulseTradablePairs.bind(this);
    this.pulseTradablePairPrice = this.pulseTradablePairPrice.bind(this);
    this.order = this.order.bind(this);
    this.orders = this.orders.bind(this);
    this.matchableOrderCounts = this.matchableOrderCounts.bind(this);
    this.matchableOrdersForPair = this.matchableOrdersForPair.bind(this);
    this.matchableBuyOrdersForPair = this.matchableBuyOrdersForPair.bind(this);
    this.matchableBuyOrdersForPairSummary = this.matchableBuyOrdersForPairSummary.bind(this);
    this.orderPairsToDisable = this.orderPairsToDisable.bind(this);
    this.orderPairMetrics = this.orderPairMetrics.bind(this);
    this.orderPairPriceBuckets = this.orderPairPriceBuckets.bind(this);
    this.orderMetrics = this.orderMetrics.bind(this);
    this.directlyConnectedTokenPairs = this.directlyConnectedTokenPairs.bind(this);
    this.tickers = this.tickers.bind(this);
    this.userPairTradeVolume = this.userPairTradeVolume.bind(this);
    this.hostChainUnbondingTime = this.hostChainUnbondingTime.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChains = this.hostChains.bind(this);
    this.hostChainByUnderlyingDenom = this.hostChainByUnderlyingDenom.bind(this);
    this.poolTotalIncentives = this.poolTotalIncentives.bind(this);
    this.validator = this.validator.bind(this);
    this.validators = this.validators.bind(this);
    this.voteIntervals = this.voteIntervals.bind(this);
    this.slashWindows = this.slashWindows.bind(this);
    this.voteSummary = this.voteSummary.bind(this);
    this.validatorVoteIntervalSummaries = this.validatorVoteIntervalSummaries.bind(this);
    this.validatorSlashWindowSummaries = this.validatorSlashWindowSummaries.bind(this);
    this.preVotes = this.preVotes.bind(this);
    this.votes = this.votes.bind(this);
    this.votePayloads = this.votePayloads.bind(this);
    this.ballotVoteResults = this.ballotVoteResults.bind(this);
    this.voteIntervalReport = this.voteIntervalReport.bind(this);
    this.oracleAnalysis = this.oracleAnalysis.bind(this);
    this.userStakes = this.userStakes.bind(this);
    this.faucetClaim = this.faucetClaim.bind(this);
    this.allFlow = this.allFlow.bind(this);
    this.flow = this.flow.bind(this);
    this.flowHistoricalPrice = this.flowHistoricalPrice.bind(this);
    this.config = this.config.bind(this);
    this.addressesByCategory = this.addressesByCategory.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.proposalVotes = this.proposalVotes.bind(this);
    this.statistics = this.statistics.bind(this);
    this.historicalBankSupply = this.historicalBankSupply.bind(this);
    this.portfolio = this.portfolio.bind(this);
    this.icnsByAddress = this.icnsByAddress.bind(this);
    this.icnsByName = this.icnsByName.bind(this);
    this.userPulseTradeVolume = this.userPulseTradeVolume.bind(this);
    this.userPryzmClaimHistory = this.userPryzmClaimHistory.bind(this);
    this.pVaultContracts = this.pVaultContracts.bind(this);
    this.pVaultSimulatePurchase = this.pVaultSimulatePurchase.bind(this);
    this.sealOrders = this.sealOrders.bind(this);
    this.sealPairs = this.sealPairs.bind(this);
    this.sealPairSummary = this.sealPairSummary.bind(this);
    this.sealReservations = this.sealReservations.bind(this);
    this.sealOrderActivities = this.sealOrderActivities.bind(this);
    this.sealReservationSettlementActivities = this.sealReservationSettlementActivities.bind(this);
    this.sealPairPrice = this.sealPairPrice.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
    this.contractInfo = this.contractInfo.bind(this);
    this.circulatingSupply = this.circulatingSupply.bind(this);
  }
  /* Asset */
  async asset(params: QueryAssetRequest): Promise<QueryAssetResponseSDKType> {
    const endpoint = `pryzmatics/asset/${params.assetId}`;
    return await this.req.get<QueryAssetResponseSDKType>(endpoint);
  }
  /* Assets */
  async assets(_params: QueryAssetsRequest = {}): Promise<QueryAssetsResponseSDKType> {
    const endpoint = `pryzmatics/asset`;
    return await this.req.get<QueryAssetsResponseSDKType>(endpoint);
  }
  /* AssetsDetails */
  async assetsDetails(params: QueryAssetsDetailsRequest): Promise<QueryAssetsDetailsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.tokenStats !== "undefined") {
      options.params.token_stats = params.tokenStats;
    }
    const endpoint = `pryzmatics/asset_details`;
    return await this.req.get<QueryAssetsDetailsResponseSDKType>(endpoint, options);
  }
  /* MaturityAll */
  async maturityAll(params: QueryAllMaturitiesRequest): Promise<QueryAllMaturitiesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.active !== "undefined") {
      options.params.active = params.active;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/maturity`;
    return await this.req.get<QueryAllMaturitiesResponseSDKType>(endpoint, options);
  }
  /* PGovProposals */
  async pGovProposals(params: QueryPGovProposalsRequest): Promise<QueryPGovProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.assetId !== "undefined") {
      options.params.asset_id = params.assetId;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/pgov/proposal`;
    return await this.req.get<QueryPGovProposalsResponseSDKType>(endpoint, options);
  }
  /* PGovProposal */
  async pGovProposal(params: QueryPGovProposalRequest): Promise<QueryPGovProposalResponseSDKType> {
    const endpoint = `pryzmatics/pgov/proposal/${params.assetId}/${params.proposalId}`;
    return await this.req.get<QueryPGovProposalResponseSDKType>(endpoint);
  }
  /* PGovVotes */
  async pGovVotes(params: QueryPGovVotesRequest): Promise<QueryPGovVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/pgov/vote/${params.assetId}/${params.proposalId}`;
    return await this.req.get<QueryPGovVotesResponseSDKType>(endpoint, options);
  }
  /* PoolToken */
  async poolToken(params: QueryPoolTokenRequest): Promise<QueryPoolTokenResponseSDKType> {
    const endpoint = `pryzmatics/pool/token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryPoolTokenResponseSDKType>(endpoint);
  }
  /* PoolTokens */
  async poolTokens(params: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponseSDKType> {
    const endpoint = `pryzmatics/pool/token/${params.poolId}`;
    return await this.req.get<QueryAllPoolTokenResponseSDKType>(endpoint);
  }
  /* Pool */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `pryzmatics/pool/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/pool`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Token */
  async token(params: QueryTokenRequest): Promise<QueryTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.detailedStats !== "undefined") {
      options.params.detailed_stats = params.detailedStats;
    }
    const endpoint = `pryzmatics/token/${params.denom}`;
    return await this.req.get<QueryTokenResponseSDKType>(endpoint, options);
  }
  /* Tokens */
  async tokens(params: QueryTokensRequest): Promise<QueryTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenType !== "undefined") {
      options.params.token_type = params.tokenType;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/token`;
    return await this.req.get<QueryTokensResponseSDKType>(endpoint, options);
  }
  /* HistoricalTokenYield */
  async historicalTokenYield(params: QueryHistoricalTokenYieldRequest): Promise<QueryHistoricalTokenYieldResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/token/historical_yield/${params.denom}`;
    return await this.req.get<QueryHistoricalTokenYieldResponseSDKType>(endpoint, options);
  }
  /* HistoricalPoolApr */
  async historicalPoolApr(params: QueryHistoricalPoolAprRequest): Promise<QueryHistoricalPoolAprResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/pool/historical_apr/${params.poolId}`;
    return await this.req.get<QueryHistoricalPoolAprResponseSDKType>(endpoint, options);
  }
  /* TokenYields */
  async tokenYields(params: QueryTokenYieldsRequest): Promise<QueryTokenYieldsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenType !== "undefined") {
      options.params.token_type = params.tokenType;
    }
    const endpoint = `pryzmatics/token/yield/${params.blockHeight}`;
    return await this.req.get<QueryTokenYieldsResponseSDKType>(endpoint, options);
  }
  /* TokenPrice */
  async tokenPrice(params: QueryPriceRequest): Promise<QueryPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/price/${params.tokenOut}`;
    return await this.req.get<QueryPriceResponseSDKType>(endpoint, options);
  }
  /* TokenPrices */
  async tokenPrices(params: QueryPricesRequest): Promise<QueryPricesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/prices/${params.blockHeight}`;
    return await this.req.get<QueryPricesResponseSDKType>(endpoint, options);
  }
  /* HistoricalPrice */
  async historicalPrice(params: QueryHistoricalPriceRequest): Promise<QueryHistoricalPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.quote !== "undefined") {
      options.params.quote = params.quote;
    }
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    if (typeof params?.useExternalPriceSource !== "undefined") {
      options.params.use_external_price_source = params.useExternalPriceSource;
    }
    const endpoint = `pryzmatics/price/historical/${params.denom}`;
    return await this.req.get<QueryHistoricalPriceResponseSDKType>(endpoint, options);
  }
  /* HistoricalNav */
  async historicalNav(params: QueryHistoricalNavRequest): Promise<QueryHistoricalNavResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/nav/historical/${params.denom}`;
    return await this.req.get<QueryHistoricalNavResponseSDKType>(endpoint, options);
  }
  /* HistoricalMarketCap */
  async historicalMarketCap(params: QueryHistoricalMarketCapRequest): Promise<QueryHistoricalMarketCapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/statistics/historical_market_cap`;
    return await this.req.get<QueryHistoricalMarketCapResponseSDKType>(endpoint, options);
  }
  /* SwappableTokens */
  async swappableTokens(_params: QuerySwappableTokensRequest = {}): Promise<QuerySwappableTokensResponseSDKType> {
    const endpoint = `pryzmatics/price/swappable_tokens`;
    return await this.req.get<QuerySwappableTokensResponseSDKType>(endpoint);
  }
  /* PriceBounds */
  async priceBounds(params: QueryPriceBoundsRequest): Promise<QueryPriceBoundsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/price/bounds/${params.denom}`;
    return await this.req.get<QueryPriceBoundsResponseSDKType>(endpoint, options);
  }
  /* TradeSimulation */
  async tradeSimulation(params: QueryTradeSimulationRequest): Promise<QueryTradeSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.swapType !== "undefined") {
      options.params.swap_type = params.swapType;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    if (typeof params?.steps !== "undefined") {
      options.params.steps = params.steps;
    }
    const endpoint = `pryzmatics/trade/simulation`;
    return await this.req.get<QueryTradeSimulationResponseSDKType>(endpoint, options);
  }
  /* SwapSteps */
  async swapSteps(params: QuerySwapStepsRequest): Promise<QuerySwapStepsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/trade/swap_steps`;
    return await this.req.get<QuerySwapStepsResponseSDKType>(endpoint, options);
  }
  /* JoinAllTokensExactLptSimulation */
  async joinAllTokensExactLptSimulation(params: QueryJoinAllTokensExactLptSimulationRequest): Promise<QueryJoinAllTokensExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOutAmount !== "undefined") {
      options.params.lpt_out_amount = params.lptOutAmount;
    }
    const endpoint = `pryzmatics/trade/join_all_tokens_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinAllTokensExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* RecoveryExitSimulation */
  async recoveryExitSimulation(params: QueryRecoveryExitSimulationRequest): Promise<QueryRecoveryExitSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptInAmount !== "undefined") {
      options.params.lpt_in_amount = params.lptInAmount;
    }
    const endpoint = `pryzmatics/trade/recovery_exit_simulation/${params.poolId}`;
    return await this.req.get<QueryRecoveryExitSimulationResponseSDKType>(endpoint, options);
  }
  /* JoinExactTokensSimulation */
  async joinExactTokensSimulation(params: QueryJoinExactTokensSimulationRequest): Promise<QueryJoinExactTokensSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsIn !== "undefined") {
      options.params.amounts_in = params.amountsIn;
    }
    const endpoint = `pryzmatics/trade/join_exact_tokens_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinExactTokensSimulationResponseSDKType>(endpoint, options);
  }
  /* JoinTokenExactLptSimulation */
  async joinTokenExactLptSimulation(params: QueryJoinTokenExactLptSimulationRequest): Promise<QueryJoinTokenExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOutAmount !== "undefined") {
      options.params.lpt_out_amount = params.lptOutAmount;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/trade/join_token_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryJoinTokenExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* ZeroImpactJoinYammSimulation */
  async zeroImpactJoinYammSimulation(params: QueryZeroImpactJoinYammSimulationRequest): Promise<QueryZeroImpactJoinYammSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.cAmountIn !== "undefined") {
      options.params.c_amount_in = params.cAmountIn;
    }
    const endpoint = `pryzmatics/trade/zero_impact_join_yamm_simulation`;
    return await this.req.get<QueryZeroImpactJoinYammSimulationResponseSDKType>(endpoint, options);
  }
  /* ZeroImpactJoinAssetToNestedSimulation */
  async zeroImpactJoinAssetToNestedSimulation(params: QueryZeroImpactJoinAssetToNestedSimulationRequest): Promise<QueryZeroImpactJoinAssetToNestedSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountIn !== "undefined") {
      options.params.amount_in = params.amountIn;
    }
    if (typeof params?.hostChainId !== "undefined") {
      options.params.host_chain_id = params.hostChainId;
    }
    if (typeof params?.transferChannel !== "undefined") {
      options.params.transfer_channel = params.transferChannel;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `pryzmatics/trade/zero_impact_join_asset_to_nested_simulation`;
    return await this.req.get<QueryZeroImpactJoinAssetToNestedSimulationResponseSDKType>(endpoint, options);
  }
  /* ZeroImpactJoinAssetToYammSimulation */
  async zeroImpactJoinAssetToYammSimulation(params: QueryZeroImpactJoinAssetToYammSimulationRequest): Promise<QueryZeroImpactJoinAssetToYammSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountIn !== "undefined") {
      options.params.amount_in = params.amountIn;
    }
    if (typeof params?.hostChainId !== "undefined") {
      options.params.host_chain_id = params.hostChainId;
    }
    if (typeof params?.transferChannel !== "undefined") {
      options.params.transfer_channel = params.transferChannel;
    }
    const endpoint = `pryzmatics/trade/zero_impact_join_asset_to_yamm_simulation`;
    return await this.req.get<QueryZeroImpactJoinAssetToYammSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitTokenExactLptSimulation */
  async exitTokenExactLptSimulation(params: QueryExitTokenExactLptSimulationRequest): Promise<QueryExitTokenExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptInAmount !== "undefined") {
      options.params.lpt_in_amount = params.lptInAmount;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/trade/exit_token_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryExitTokenExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitExactTokensSimulation */
  async exitExactTokensSimulation(params: QueryExitExactTokensSimulationRequest): Promise<QueryExitExactTokensSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsOut !== "undefined") {
      options.params.amounts_out = params.amountsOut;
    }
    const endpoint = `pryzmatics/trade/exit_exact_tokens_simulation/${params.poolId}`;
    return await this.req.get<QueryExitExactTokensSimulationResponseSDKType>(endpoint, options);
  }
  /* ExitAllTokensExactLptSimulation */
  async exitAllTokensExactLptSimulation(params: QueryExitAllTokensExactLptSimulationRequest): Promise<QueryExitAllTokensExactLptSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptInAmount !== "undefined") {
      options.params.lpt_in_amount = params.lptInAmount;
    }
    const endpoint = `pryzmatics/trade/exit_all_tokens_exact_lpt_simulation/${params.poolId}`;
    return await this.req.get<QueryExitAllTokensExactLptSimulationResponseSDKType>(endpoint, options);
  }
  /* UserTradeHistory */
  async userTradeHistory(params: QueryUserTradeHistoryRequest): Promise<QueryUserTradeHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.firstToken !== "undefined") {
      options.params.first_token = params.firstToken;
    }
    if (typeof params?.secondToken !== "undefined") {
      options.params.second_token = params.secondToken;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.operationTypes !== "undefined") {
      options.params.operation_types = params.operationTypes;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeProxyTrades !== "undefined") {
      options.params.include_proxy_trades = params.includeProxyTrades;
    }
    if (typeof params?.minVolume !== "undefined") {
      options.params.min_volume = params.minVolume;
    }
    const endpoint = `pryzmatics/trade/user_trade_history`;
    return await this.req.get<QueryUserTradeHistoryResponseSDKType>(endpoint, options);
  }
  /* UserTradeHistorySummary */
  async userTradeHistorySummary(params: QueryUserTradeHistorySummaryRequest): Promise<QueryUserTradeHistorySummaryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.operationTypes !== "undefined") {
      options.params.operation_types = params.operationTypes;
    }
    if (typeof params?.intervalSeconds !== "undefined") {
      options.params.interval_seconds = params.intervalSeconds;
    }
    const endpoint = `pryzmatics/trade/user_trade_history_summary`;
    return await this.req.get<QueryUserTradeHistorySummaryResponseSDKType>(endpoint, options);
  }
  /* UserTradeVolume */
  async userTradeVolume(params: QueryUserTradeVolumeRequest): Promise<QueryUserTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.operationTypes !== "undefined") {
      options.params.operation_types = params.operationTypes;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.intervalHours !== "undefined") {
      options.params.interval_hours = params.intervalHours;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeProxyTrades !== "undefined") {
      options.params.include_proxy_trades = params.includeProxyTrades;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `pryzmatics/trade/user_trade_volume`;
    return await this.req.get<QueryUserTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* IntervalUserTradeVolume */
  async intervalUserTradeVolume(params: QueryIntervalUserTradeVolumeRequest): Promise<QueryIntervalUserTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.operationTypes !== "undefined") {
      options.params.operation_types = params.operationTypes;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeProxyTrades !== "undefined") {
      options.params.include_proxy_trades = params.includeProxyTrades;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.minVolume !== "undefined") {
      options.params.min_volume = params.minVolume;
    }
    const endpoint = `pryzmatics/trade/interval_user_trade_volume`;
    return await this.req.get<QueryIntervalUserTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* TokenTradeVolume */
  async tokenTradeVolume(params: QueryTokenTradeVolumeRequest): Promise<QueryTokenTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/token/${params.denom}`;
    return await this.req.get<QueryTokenTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* PoolTradeVolume */
  async poolTradeVolume(params: QueryPoolTradeVolumeRequest): Promise<QueryPoolTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/pool/${params.poolId}`;
    return await this.req.get<QueryPoolTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* FavoritePairs */
  async favoritePairs(params: QueryFavoritePairsRequest): Promise<QueryFavoritePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/trade/volume/favorite_pairs`;
    return await this.req.get<QueryFavoritePairsResponseSDKType>(endpoint, options);
  }
  /* PulseTradablePairs */
  async pulseTradablePairs(params: QueryPulseTradablePairsRequest): Promise<QueryPulseTradablePairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzmatics/trade/pulse_tradable_pairs/${params.denom}`;
    return await this.req.get<QueryPulseTradablePairsResponseSDKType>(endpoint, options);
  }
  /* PulseTradablePairPrice */
  async pulseTradablePairPrice(params: QueryPulseTradablePairPriceRequest): Promise<QueryPulseTradablePairPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.whitelistedRoute !== "undefined") {
      options.params.whitelisted_route = params.whitelistedRoute;
    }
    const endpoint = `pryzmatics/trade/pulse_tradable_pair_price`;
    return await this.req.get<QueryPulseTradablePairPriceResponseSDKType>(endpoint, options);
  }
  /* Order */
  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const endpoint = `pryzmatics/trade/order/${params.id}`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint);
  }
  /* Orders */
  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/order`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* MatchableOrderCounts */
  async matchableOrderCounts(params: QueryMatchableOrderCountsRequest): Promise<QueryMatchableOrderCountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minBuy !== "undefined") {
      options.params.min_buy = params.minBuy;
    }
    if (typeof params?.minSell !== "undefined") {
      options.params.min_sell = params.minSell;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/matchable_order_counts`;
    return await this.req.get<QueryMatchableOrderCountsResponseSDKType>(endpoint, options);
  }
  /* MatchableOrdersForPair */
  async matchableOrdersForPair(params: QueryMatchableOrdersForPairRequest): Promise<QueryMatchableOrdersForPairResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minBuyPrice !== "undefined") {
      options.params.min_buy_price = params.minBuyPrice;
    }
    if (typeof params?.minSellPrice !== "undefined") {
      options.params.min_sell_price = params.minSellPrice;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    const endpoint = `pryzmatics/trade/matchable_orders_for_pair/${params.tokenIn}/${params.tokenOut}/${params.poolId}/${params.whitelistedRoute}`;
    return await this.req.get<QueryMatchableOrdersForPairResponseSDKType>(endpoint, options);
  }
  /* MatchableBuyOrdersForPair */
  async matchableBuyOrdersForPair(params: QueryMatchableBuyOrdersForPairRequest): Promise<QueryMatchableBuyOrdersForPairResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minPrice !== "undefined") {
      options.params.min_price = params.minPrice;
    }
    if (typeof params?.minRemainingAmount !== "undefined") {
      options.params.min_remaining_amount = params.minRemainingAmount;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.allowInsufficientFunds !== "undefined") {
      options.params.allow_insufficient_funds = params.allowInsufficientFunds;
    }
    const endpoint = `pryzmatics/trade/matchable_buy_orders_for_pair/${params.tokenIn}/${params.tokenOut}/${params.poolId}/${params.whitelistedRoute}`;
    return await this.req.get<QueryMatchableBuyOrdersForPairResponseSDKType>(endpoint, options);
  }
  /* MatchableBuyOrdersForPairSummary */
  async matchableBuyOrdersForPairSummary(params: QueryMatchableBuyOrdersForPairSummaryRequest): Promise<QueryMatchableBuyOrdersForPairSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.minPrice !== "undefined") {
      options.params.min_price = params.minPrice;
    }
    if (typeof params?.minRemainingAmount !== "undefined") {
      options.params.min_remaining_amount = params.minRemainingAmount;
    }
    const endpoint = `pryzmatics/trade/matchable_buy_orders_for_pair_summary/${params.tokenIn}/${params.tokenOut}/${params.poolId}/${params.whitelistedRoute}`;
    return await this.req.get<QueryMatchableBuyOrdersForPairSummaryResponseSDKType>(endpoint, options);
  }
  /* OrderPairsToDisable */
  async orderPairsToDisable(_params: QueryOrderPairsToDisableRequest = {}): Promise<QueryOrderPairsToDisableResponseSDKType> {
    const endpoint = `pryzmatics/trade/order_pairs_to_disable`;
    return await this.req.get<QueryOrderPairsToDisableResponseSDKType>(endpoint);
  }
  /* OrderPairMetrics */
  async orderPairMetrics(params: QueryOrderPairMetricsRequest = {
    pagination: undefined
  }): Promise<QueryOrderPairMetricsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/order_pair_metrics`;
    return await this.req.get<QueryOrderPairMetricsResponseSDKType>(endpoint, options);
  }
  /* OrderPairPriceBuckets */
  async orderPairPriceBuckets(params: QueryOrderPairPriceBucketsRequest): Promise<QueryOrderPairPriceBucketsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.whitelistedRoute !== "undefined") {
      options.params.whitelisted_route = params.whitelistedRoute;
    }
    if (typeof params?.bucketSize !== "undefined") {
      options.params.bucket_size = params.bucketSize;
    }
    const endpoint = `pryzmatics/trade/order_pair_price_buckets`;
    return await this.req.get<QueryOrderPairPriceBucketsResponseSDKType>(endpoint, options);
  }
  /* OrderMetrics */
  async orderMetrics(params: QueryOrderMetricsRequest): Promise<QueryOrderMetricsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/trade/order_metrics`;
    return await this.req.get<QueryOrderMetricsResponseSDKType>(endpoint, options);
  }
  /* DirectlyConnectedTokenPairs */
  async directlyConnectedTokenPairs(params: QueryDirectlyConnectedTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryDirectlyConnectedTokenPairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/directly_connected_token_pair`;
    return await this.req.get<QueryDirectlyConnectedTokenPairsResponseSDKType>(endpoint, options);
  }
  /* in rest-api the response is an array of tickers, instead of QueryTickersResponse */
  async tickers(_params: QueryTickersRequest = {}): Promise<QueryTickersResponseSDKType> {
    const endpoint = `pryzmatics/trade/tickers`;
    return await this.req.get<QueryTickersResponseSDKType>(endpoint);
  }
  /* UserPairTradeVolume */
  async userPairTradeVolume(params: QueryUserPairTradeVolumeRequest): Promise<QueryUserPairTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.operationTypes !== "undefined") {
      options.params.operation_types = params.operationTypes;
    }
    if (typeof params?.orderByVolumeAsc !== "undefined") {
      options.params.order_by_volume_asc = params.orderByVolumeAsc;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.includeProxyTrades !== "undefined") {
      options.params.include_proxy_trades = params.includeProxyTrades;
    }
    const endpoint = `pryzmatics/trade/user_pair_trade_volume`;
    return await this.req.get<QueryUserPairTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* HostChainUnbondingTime */
  async hostChainUnbondingTime(params: QueryHostChainUnbondingTimeRequest): Promise<QueryHostChainUnbondingTimeResponseSDKType> {
    const endpoint = `pryzmatics/icstaking/host_chain_unbonding_time/${params.hostChainId}`;
    return await this.req.get<QueryHostChainUnbondingTimeResponseSDKType>(endpoint);
  }
  /* HostChain */
  async hostChain(params: QueryHostChainRequest): Promise<QueryHostChainResponseSDKType> {
    const endpoint = `pryzmatics/icstaking/host_chain/${params.hostChainId}`;
    return await this.req.get<QueryHostChainResponseSDKType>(endpoint);
  }
  /* HostChains */
  async hostChains(params: QueryHostChainsRequest = {
    pagination: undefined
  }): Promise<QueryHostChainsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/icstaking/host_chain`;
    return await this.req.get<QueryHostChainsResponseSDKType>(endpoint, options);
  }
  /* HostChainByUnderlyingDenom */
  async hostChainByUnderlyingDenom(params: QueryHostChainByUnderlyingDenomRequest): Promise<QueryHostChainByUnderlyingDenomResponseSDKType> {
    const endpoint = `pryzmatics/icstaking/host_chain_by_underlying_denom/${params.denom}`;
    return await this.req.get<QueryHostChainByUnderlyingDenomResponseSDKType>(endpoint);
  }
  /* PoolTotalIncentives */
  async poolTotalIncentives(params: QueryPoolTotalIncentivesRequest): Promise<QueryPoolTotalIncentivesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.bondDenom !== "undefined") {
      options.params.bond_denom = params.bondDenom;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    const endpoint = `pryzmatics/incentives/pool_total_incentives`;
    return await this.req.get<QueryPoolTotalIncentivesResponseSDKType>(endpoint, options);
  }
  /* Validator */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const endpoint = `pryzmatics/oracle/validator/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorResponseSDKType>(endpoint);
  }
  /* Validators */
  async validators(params: QueryValidatorsRequest = {
    pagination: undefined
  }): Promise<QueryValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator`;
    return await this.req.get<QueryValidatorsResponseSDKType>(endpoint, options);
  }
  /* VoteIntervals */
  async voteIntervals(params: QueryVoteIntervalsRequest): Promise<QueryVoteIntervalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote_interval`;
    return await this.req.get<QueryVoteIntervalsResponseSDKType>(endpoint, options);
  }
  /* SlashWindows */
  async slashWindows(params: QuerySlashWindowsRequest): Promise<QuerySlashWindowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/slash_window`;
    return await this.req.get<QuerySlashWindowsResponseSDKType>(endpoint, options);
  }
  /* VoteSummary */
  async voteSummary(_params: QueryVoteSummaryRequest = {}): Promise<QueryVoteSummaryResponseSDKType> {
    const endpoint = `pryzmatics/oracle/vote_summary`;
    return await this.req.get<QueryVoteSummaryResponseSDKType>(endpoint);
  }
  /* ValidatorVoteIntervalSummaries */
  async validatorVoteIntervalSummaries(params: QueryValidatorVoteIntervalSummariesRequest): Promise<QueryValidatorVoteIntervalSummariesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator/vote_interval_summary/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorVoteIntervalSummariesResponseSDKType>(endpoint, options);
  }
  /* ValidatorSlashWindowSummaries */
  async validatorSlashWindowSummaries(params: QueryValidatorSlashWindowSummariesRequest): Promise<QueryValidatorSlashWindowSummariesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/validator/slash_window_summary/${params.operatorAddress}`;
    return await this.req.get<QueryValidatorSlashWindowSummariesResponseSDKType>(endpoint, options);
  }
  /* PreVotes */
  async preVotes(params: QueryPreVotesRequest): Promise<QueryPreVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.feeder !== "undefined") {
      options.params.feeder = params.feeder;
    }
    if (typeof params?.validator !== "undefined") {
      options.params.validator = params.validator;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/pre_vote`;
    return await this.req.get<QueryPreVotesResponseSDKType>(endpoint, options);
  }
  /* Votes */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.feeder !== "undefined") {
      options.params.feeder = params.feeder;
    }
    if (typeof params?.validator !== "undefined") {
      options.params.validator = params.validator;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote`;
    return await this.req.get<QueryVotesResponseSDKType>(endpoint, options);
  }
  /* VotePayloads */
  async votePayloads(params: QueryVotePayloadsRequest): Promise<QueryVotePayloadsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voteId !== "undefined") {
      options.params.vote_id = params.voteId;
    }
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/vote_payload`;
    return await this.req.get<QueryVotePayloadsResponseSDKType>(endpoint, options);
  }
  /* BallotVoteResults */
  async ballotVoteResults(params: QueryBallotVoteResultsRequest): Promise<QueryBallotVoteResultsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
    }
    if (typeof params?.fromBlockHeight !== "undefined") {
      options.params.from_block_height = params.fromBlockHeight;
    }
    if (typeof params?.toBlockHeight !== "undefined") {
      options.params.to_block_height = params.toBlockHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/oracle/ballot_vote_result`;
    return await this.req.get<QueryBallotVoteResultsResponseSDKType>(endpoint, options);
  }
  /* VoteIntervalReport */
  async voteIntervalReport(params: QueryVoteIntervalReportRequest): Promise<QueryVoteIntervalReportResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.validators !== "undefined") {
      options.params.validators = params.validators;
    }
    if (typeof params?.namespace !== "undefined") {
      options.params.namespace = params.namespace;
    }
    if (typeof params?.module !== "undefined") {
      options.params.module = params.module;
    }
    if (typeof params?.csv !== "undefined") {
      options.params.csv = params.csv;
    }
    const endpoint = `pryzmatics/oracle/vote_interval_report/${params.voteIntervalCloseBlockHeight}`;
    return await this.req.get<QueryVoteIntervalReportResponseSDKType>(endpoint, options);
  }
  /* OracleAnalysis */
  async oracleAnalysis(_params: QuerySlashWindowAnalysisRequest = {}): Promise<QuerySlashWindowAnalysisResponseSDKType> {
    const endpoint = `pryzmatics/oracle/slash_window_analysis`;
    return await this.req.get<QuerySlashWindowAnalysisResponseSDKType>(endpoint);
  }
  /* UserStakes */
  async userStakes(params: QueryUserStakesRequest): Promise<QueryUserStakesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/ystaking/user_stake`;
    return await this.req.get<QueryUserStakesResponseSDKType>(endpoint, options);
  }
  /* FaucetClaim */
  async faucetClaim(params: QueryClaimRequest): Promise<QueryClaimResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.captchaRequest !== "undefined") {
      options.params.captcha_request = params.captchaRequest;
    }
    const endpoint = `pryzmatics/faucet/claim`;
    return await this.req.get<QueryClaimResponseSDKType>(endpoint, options);
  }
  /* AllFlow */
  async allFlow(params: QueryAllFlowRequest): Promise<QueryAllFlowResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }
    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }
    if (typeof params?.tokenInClaimability !== "undefined") {
      options.params.token_in_claimability = params.tokenInClaimability;
    }
    if (typeof params?.participant !== "undefined") {
      options.params.participant = params.participant;
    }
    if (typeof params?.participationType !== "undefined") {
      options.params.participation_type = params.participationType;
    }
    if (typeof params?.tokenOutClaimability !== "undefined") {
      options.params.token_out_claimability = params.tokenOutClaimability;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.excludeCreators !== "undefined") {
      options.params.exclude_creators = params.excludeCreators;
    }
    const endpoint = `pryzmatics/flowtrade/flow`;
    return await this.req.get<QueryAllFlowResponseSDKType>(endpoint, options);
  }
  /* Flow */
  async flow(params: QueryFlowRequest): Promise<QueryFlowResponseSDKType> {
    const endpoint = `pryzmatics/flowtrade/flow/${params.id}`;
    return await this.req.get<QueryFlowResponseSDKType>(endpoint);
  }
  /* FlowHistoricalPrice */
  async flowHistoricalPrice(params: QueryFlowHistoricalPriceRequest): Promise<QueryFlowHistoricalPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/flowtrade/flow/historical_price/${params.flowId}`;
    return await this.req.get<QueryFlowHistoricalPriceResponseSDKType>(endpoint, options);
  }
  /* Config */
  async config(_params: QueryConfigRequest = {}): Promise<QueryConfigResponseSDKType> {
    const endpoint = `pryzmatics/config`;
    return await this.req.get<QueryConfigResponseSDKType>(endpoint);
  }
  /* AddressesByCategory */
  async addressesByCategory(params: QueryAddressesByCategoryRequest): Promise<QueryAddressesByCategoryResponseSDKType> {
    const endpoint = `pryzmatics/addresses/${params.category}`;
    return await this.req.get<QueryAddressesByCategoryResponseSDKType>(endpoint);
  }
  /* Proposal */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `pryzmatics/gov/proposal/${params.id}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  }
  /* Proposals */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.proposer !== "undefined") {
      options.params.proposer = params.proposer;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/gov/proposal`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  }
  /* ProposalVotes */
  async proposalVotes(params: QueryProposalVotesRequest): Promise<QueryProposalVotesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.excludeVoters !== "undefined") {
      options.params.exclude_voters = params.excludeVoters;
    }
    const endpoint = `pryzmatics/gov/vote/${params.proposalId}`;
    return await this.req.get<QueryProposalVotesResponseSDKType>(endpoint, options);
  }
  /* Statistics */
  async statistics(_params: QueryStatisticsRequest = {}): Promise<QueryStatisticsResponseSDKType> {
    const endpoint = `pryzmatics/statistics`;
    return await this.req.get<QueryStatisticsResponseSDKType>(endpoint);
  }
  /* HistoricalBankSupply */
  async historicalBankSupply(params: QueryHistoricalBankSupplyRequest): Promise<QueryHistoricalBankSupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.timeResolutionType !== "undefined") {
      options.params.time_resolution_type = params.timeResolutionType;
    }
    if (typeof params?.timeResolutionValue !== "undefined") {
      options.params.time_resolution_value = params.timeResolutionValue;
    }
    if (typeof params?.from !== "undefined") {
      options.params.from = params.from;
    }
    if (typeof params?.to !== "undefined") {
      options.params.to = params.to;
    }
    const endpoint = `pryzmatics/bank/supply/historical/${params.denom}`;
    return await this.req.get<QueryHistoricalBankSupplyResponseSDKType>(endpoint, options);
  }
  /* Portfolio */
  async portfolio(params: QueryPortfolioRequest): Promise<QueryPortfolioResponseSDKType> {
    const endpoint = `pryzmatics/portfolio/${params.address}`;
    return await this.req.get<QueryPortfolioResponseSDKType>(endpoint);
  }
  /* IcnsByAddress */
  async icnsByAddress(params: QueryIcnsByAddressRequest): Promise<QueryIcnsByAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.strictCheck !== "undefined") {
      options.params.strict_check = params.strictCheck;
    }
    const endpoint = `pryzmatics/icns/by_address/${params.address}`;
    return await this.req.get<QueryIcnsByAddressResponseSDKType>(endpoint, options);
  }
  /* IcnsByName */
  async icnsByName(params: QueryIcnsByNameRequest): Promise<QueryIcnsByNameResponseSDKType> {
    const endpoint = `pryzmatics/icns/by_name/${params.icns}`;
    return await this.req.get<QueryIcnsByNameResponseSDKType>(endpoint);
  }
  /* UserPulseTradeVolume */
  async userPulseTradeVolume(params: QueryUserPulseTradeVolumeRequest): Promise<QueryUserPulseTradeVolumeResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/trade/user_pulse_trade_volume`;
    return await this.req.get<QueryUserPulseTradeVolumeResponseSDKType>(endpoint, options);
  }
  /* UserPryzmClaimHistory */
  async userPryzmClaimHistory(params: QueryUserPryzmClaimHistoryRequest): Promise<QueryUserPryzmClaimHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `pryzmatics/trade/user_pryzm_claim_history/${params.address}`;
    return await this.req.get<QueryUserPryzmClaimHistoryResponseSDKType>(endpoint, options);
  }
  /* PVaultContracts */
  async pVaultContracts(params: QueryPVaultContractsRequest): Promise<QueryPVaultContractsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/pvault/contracts`;
    return await this.req.get<QueryPVaultContractsResponseSDKType>(endpoint, options);
  }
  /* PVaultSimulatePurchase */
  async pVaultSimulatePurchase(params: QueryPurchaseSimulationRequest): Promise<QueryPurchaseSimulationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.amount !== "undefined") {
      options.params.amount = params.amount;
    }
    if (typeof params?.steps !== "undefined") {
      options.params.steps = params.steps;
    }
    if (typeof params?.contract !== "undefined") {
      options.params.contract = params.contract;
    }
    const endpoint = `pryzmatics/pvault/simulate_purchase`;
    return await this.req.get<QueryPurchaseSimulationResponseSDKType>(endpoint, options);
  }
  /* SealOrders */
  async sealOrders(params: QuerySealOrdersRequest): Promise<QuerySealOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.live !== "undefined") {
      options.params.live = params.live;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.reservationAllowed !== "undefined") {
      options.params.reservation_allowed = params.reservationAllowed;
    }
    if (typeof params?.minPriceMargin !== "undefined") {
      options.params.min_price_margin = params.minPriceMargin;
    }
    if (typeof params?.maxMinPartialMatchableAmount !== "undefined") {
      options.params.max_min_partial_matchable_amount = params.maxMinPartialMatchableAmount;
    }
    if (typeof params?.reservationDepositDenom !== "undefined") {
      options.params.reservation_deposit_denom = params.reservationDepositDenom;
    }
    if (typeof params?.maxReservationDepositPerStable !== "undefined") {
      options.params.max_reservation_deposit_per_stable = params.maxReservationDepositPerStable;
    }
    if (typeof params?.minReservationPeriodSeconds !== "undefined") {
      options.params.min_reservation_period_seconds = params.minReservationPeriodSeconds;
    }
    if (typeof params?.minRemainingAmountStableTerms !== "undefined") {
      options.params.min_remaining_amount_stable_terms = params.minRemainingAmountStableTerms;
    }
    if (typeof params?.minRemainingAmount !== "undefined") {
      options.params.min_remaining_amount = params.minRemainingAmount;
    }
    if (typeof params?.maxPriceMargin !== "undefined") {
      options.params.max_price_margin = params.maxPriceMargin;
    }
    const endpoint = `pryzmatics/seal/orders`;
    return await this.req.get<QuerySealOrdersResponseSDKType>(endpoint, options);
  }
  /* SealPairs */
  async sealPairs(params: QuerySealPairsRequest): Promise<QuerySealPairsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.reservableOnly !== "undefined") {
      options.params.reservable_only = params.reservableOnly;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.excludeEmpty !== "undefined") {
      options.params.exclude_empty = params.excludeEmpty;
    }
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    const endpoint = `pryzmatics/seal/pairs`;
    return await this.req.get<QuerySealPairsResponseSDKType>(endpoint, options);
  }
  /* SealPairSummary */
  async sealPairSummary(params: QuerySealPairSummaryRequest): Promise<QuerySealPairSummaryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    if (typeof params?.maxPrice !== "undefined") {
      options.params.max_price = params.maxPrice;
    }
    const endpoint = `pryzmatics/seal/pair_summary`;
    return await this.req.get<QuerySealPairSummaryResponseSDKType>(endpoint, options);
  }
  /* SealReservations */
  async sealReservations(params: QuerySealReservationsRequest): Promise<QuerySealReservationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.live !== "undefined") {
      options.params.live = params.live;
    }
    if (typeof params?.orderId !== "undefined") {
      options.params.order_id = params.orderId;
    }
    if (typeof params?.reserver !== "undefined") {
      options.params.reserver = params.reserver;
    }
    const endpoint = `pryzmatics/seal/reservations`;
    return await this.req.get<QuerySealReservationsResponseSDKType>(endpoint, options);
  }
  /* SealOrderActivities */
  async sealOrderActivities(params: QuerySealOrderActivitiesRequest): Promise<QuerySealOrderActivitiesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.orderId !== "undefined") {
      options.params.order_id = params.orderId;
    }
    if (typeof params?.user !== "undefined") {
      options.params.user = params.user;
    }
    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }
    const endpoint = `pryzmatics/seal/activities`;
    return await this.req.get<QuerySealOrderActivitiesResponseSDKType>(endpoint, options);
  }
  /* SealReservationSettlementActivities */
  async sealReservationSettlementActivities(params: QuerySealReservationSettlementActivitiesRequest): Promise<QuerySealReservationSettlementActivitiesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/seal/reservation_settlement_activities/${params.reservationId}`;
    return await this.req.get<QuerySealReservationSettlementActivitiesResponseSDKType>(endpoint, options);
  }
  /* SealPairPrice */
  async sealPairPrice(params: QuerySealPairPriceRequest): Promise<QuerySealPairPriceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzmatics/seal/pair_price`;
    return await this.req.get<QuerySealPairPriceResponseSDKType>(endpoint, options);
  }
  /* DenomOwners */
  async denomOwners(params: DenomOwnersRequest): Promise<DenomOwnersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.orderByBalanceDesc !== "undefined") {
      options.params.order_by_balance_desc = params.orderByBalanceDesc;
    }
    const endpoint = `pryzmatics/denom_owners/${params.denom}`;
    return await this.req.get<DenomOwnersResponseSDKType>(endpoint, options);
  }
  /* ContractInfo */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzmatics/wasm/contract_info`;
    return await this.req.get<QueryContractInfoResponseSDKType>(endpoint, options);
  }
  /* CirculatingSupply */
  async circulatingSupply(_params: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponseSDKType> {
    const endpoint = `pryzmatics/coingecko/circulating_supply`;
    return await this.req.get<QueryCirculatingSupplyResponseSDKType>(endpoint);
  }
}