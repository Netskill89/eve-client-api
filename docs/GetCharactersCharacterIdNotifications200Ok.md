# EveApi.GetCharactersCharacterIdNotifications200Ok

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_read** | **Boolean** | is_read boolean | [optional] 
**notification_id** | **Number** | notification_id integer | 
**sender_id** | **Number** | sender_id integer | 
**sender_type** | **String** | sender_type string | 
**text** | **String** | text string | [optional] 
**timestamp** | **Date** | timestamp string | 
**type** | **String** | type string | 


<a name="SenderTypeEnum"></a>
## Enum: SenderTypeEnum


* `character` (value: `"character"`)

* `corporation` (value: `"corporation"`)

* `alliance` (value: `"alliance"`)

* `faction` (value: `"faction"`)

* `other` (value: `"other"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `AcceptedAlly` (value: `"AcceptedAlly"`)

* `AcceptedSurrender` (value: `"AcceptedSurrender"`)

* `AgentRetiredTrigravian` (value: `"AgentRetiredTrigravian"`)

* `AllAnchoringMsg` (value: `"AllAnchoringMsg"`)

* `AllMaintenanceBillMsg` (value: `"AllMaintenanceBillMsg"`)

* `AllStrucInvulnerableMsg` (value: `"AllStrucInvulnerableMsg"`)

* `AllStructVulnerableMsg` (value: `"AllStructVulnerableMsg"`)

* `AllWarCorpJoinedAllianceMsg` (value: `"AllWarCorpJoinedAllianceMsg"`)

* `AllWarDeclaredMsg` (value: `"AllWarDeclaredMsg"`)

* `AllWarInvalidatedMsg` (value: `"AllWarInvalidatedMsg"`)

* `AllWarRetractedMsg` (value: `"AllWarRetractedMsg"`)

* `AllWarSurrenderMsg` (value: `"AllWarSurrenderMsg"`)

* `AllianceCapitalChanged` (value: `"AllianceCapitalChanged"`)

* `AllianceWarDeclaredV2` (value: `"AllianceWarDeclaredV2"`)

* `AllyContractCancelled` (value: `"AllyContractCancelled"`)

* `AllyJoinedWarAggressorMsg` (value: `"AllyJoinedWarAggressorMsg"`)

* `AllyJoinedWarAllyMsg` (value: `"AllyJoinedWarAllyMsg"`)

* `AllyJoinedWarDefenderMsg` (value: `"AllyJoinedWarDefenderMsg"`)

* `BattlePunishFriendlyFire` (value: `"BattlePunishFriendlyFire"`)

* `BillOutOfMoneyMsg` (value: `"BillOutOfMoneyMsg"`)

* `BillPaidCorpAllMsg` (value: `"BillPaidCorpAllMsg"`)

* `BountyClaimMsg` (value: `"BountyClaimMsg"`)

* `BountyESSShared` (value: `"BountyESSShared"`)

* `BountyESSTaken` (value: `"BountyESSTaken"`)

* `BountyPlacedAlliance` (value: `"BountyPlacedAlliance"`)

* `BountyPlacedChar` (value: `"BountyPlacedChar"`)

* `BountyPlacedCorp` (value: `"BountyPlacedCorp"`)

* `BountyYourBountyClaimed` (value: `"BountyYourBountyClaimed"`)

* `BuddyConnectContactAdd` (value: `"BuddyConnectContactAdd"`)

* `CharAppAcceptMsg` (value: `"CharAppAcceptMsg"`)

* `CharAppRejectMsg` (value: `"CharAppRejectMsg"`)

* `CharAppWithdrawMsg` (value: `"CharAppWithdrawMsg"`)

* `CharLeftCorpMsg` (value: `"CharLeftCorpMsg"`)

* `CharMedalMsg` (value: `"CharMedalMsg"`)

* `CharTerminationMsg` (value: `"CharTerminationMsg"`)

* `CloneActivationMsg` (value: `"CloneActivationMsg"`)

* `CloneActivationMsg2` (value: `"CloneActivationMsg2"`)

* `CloneMovedMsg` (value: `"CloneMovedMsg"`)

* `CloneRevokedMsg1` (value: `"CloneRevokedMsg1"`)

* `CloneRevokedMsg2` (value: `"CloneRevokedMsg2"`)

* `CombatOperationFinished` (value: `"CombatOperationFinished"`)

* `ContactAdd` (value: `"ContactAdd"`)

* `ContactEdit` (value: `"ContactEdit"`)

* `ContainerPasswordMsg` (value: `"ContainerPasswordMsg"`)

* `ContractRegionChangedToPochven` (value: `"ContractRegionChangedToPochven"`)

* `CorpAllBillMsg` (value: `"CorpAllBillMsg"`)

* `CorpAppAcceptMsg` (value: `"CorpAppAcceptMsg"`)

* `CorpAppInvitedMsg` (value: `"CorpAppInvitedMsg"`)

* `CorpAppNewMsg` (value: `"CorpAppNewMsg"`)

* `CorpAppRejectCustomMsg` (value: `"CorpAppRejectCustomMsg"`)

* `CorpAppRejectMsg` (value: `"CorpAppRejectMsg"`)

* `CorpBecameWarEligible` (value: `"CorpBecameWarEligible"`)

* `CorpDividendMsg` (value: `"CorpDividendMsg"`)

* `CorpFriendlyFireDisableTimerCompleted` (value: `"CorpFriendlyFireDisableTimerCompleted"`)

* `CorpFriendlyFireDisableTimerStarted` (value: `"CorpFriendlyFireDisableTimerStarted"`)

* `CorpFriendlyFireEnableTimerCompleted` (value: `"CorpFriendlyFireEnableTimerCompleted"`)

* `CorpFriendlyFireEnableTimerStarted` (value: `"CorpFriendlyFireEnableTimerStarted"`)

* `CorpKicked` (value: `"CorpKicked"`)

* `CorpLiquidationMsg` (value: `"CorpLiquidationMsg"`)

* `CorpNewCEOMsg` (value: `"CorpNewCEOMsg"`)

* `CorpNewsMsg` (value: `"CorpNewsMsg"`)

* `CorpNoLongerWarEligible` (value: `"CorpNoLongerWarEligible"`)

* `CorpOfficeExpirationMsg` (value: `"CorpOfficeExpirationMsg"`)

* `CorpStructLostMsg` (value: `"CorpStructLostMsg"`)

* `CorpTaxChangeMsg` (value: `"CorpTaxChangeMsg"`)

* `CorpVoteCEORevokedMsg` (value: `"CorpVoteCEORevokedMsg"`)

* `CorpVoteMsg` (value: `"CorpVoteMsg"`)

* `CorpWarDeclaredMsg` (value: `"CorpWarDeclaredMsg"`)

* `CorpWarDeclaredV2` (value: `"CorpWarDeclaredV2"`)

* `CorpWarFightingLegalMsg` (value: `"CorpWarFightingLegalMsg"`)

* `CorpWarInvalidatedMsg` (value: `"CorpWarInvalidatedMsg"`)

* `CorpWarRetractedMsg` (value: `"CorpWarRetractedMsg"`)

* `CorpWarSurrenderMsg` (value: `"CorpWarSurrenderMsg"`)

* `CustomsMsg` (value: `"CustomsMsg"`)

* `DeclareWar` (value: `"DeclareWar"`)

* `DistrictAttacked` (value: `"DistrictAttacked"`)

* `DustAppAcceptedMsg` (value: `"DustAppAcceptedMsg"`)

* `ESSMainBankLink` (value: `"ESSMainBankLink"`)

* `EntosisCaptureStarted` (value: `"EntosisCaptureStarted"`)

* `ExpertSystemExpired` (value: `"ExpertSystemExpired"`)

* `ExpertSystemExpiryImminent` (value: `"ExpertSystemExpiryImminent"`)

* `FWAllianceKickMsg` (value: `"FWAllianceKickMsg"`)

* `FWAllianceWarningMsg` (value: `"FWAllianceWarningMsg"`)

* `FWCharKickMsg` (value: `"FWCharKickMsg"`)

* `FWCharRankGainMsg` (value: `"FWCharRankGainMsg"`)

* `FWCharRankLossMsg` (value: `"FWCharRankLossMsg"`)

* `FWCharWarningMsg` (value: `"FWCharWarningMsg"`)

* `FWCorpJoinMsg` (value: `"FWCorpJoinMsg"`)

* `FWCorpKickMsg` (value: `"FWCorpKickMsg"`)

* `FWCorpLeaveMsg` (value: `"FWCorpLeaveMsg"`)

* `FWCorpWarningMsg` (value: `"FWCorpWarningMsg"`)

* `FacWarCorpJoinRequestMsg` (value: `"FacWarCorpJoinRequestMsg"`)

* `FacWarCorpJoinWithdrawMsg` (value: `"FacWarCorpJoinWithdrawMsg"`)

* `FacWarCorpLeaveRequestMsg` (value: `"FacWarCorpLeaveRequestMsg"`)

* `FacWarCorpLeaveWithdrawMsg` (value: `"FacWarCorpLeaveWithdrawMsg"`)

* `FacWarLPDisqualifiedEvent` (value: `"FacWarLPDisqualifiedEvent"`)

* `FacWarLPDisqualifiedKill` (value: `"FacWarLPDisqualifiedKill"`)

* `FacWarLPPayoutEvent` (value: `"FacWarLPPayoutEvent"`)

* `FacWarLPPayoutKill` (value: `"FacWarLPPayoutKill"`)

* `GameTimeAdded` (value: `"GameTimeAdded"`)

* `GameTimeReceived` (value: `"GameTimeReceived"`)

* `GameTimeSent` (value: `"GameTimeSent"`)

* `GiftReceived` (value: `"GiftReceived"`)

* `IHubDestroyedByBillFailure` (value: `"IHubDestroyedByBillFailure"`)

* `IncursionCompletedMsg` (value: `"IncursionCompletedMsg"`)

* `IndustryOperationFinished` (value: `"IndustryOperationFinished"`)

* `IndustryTeamAuctionLost` (value: `"IndustryTeamAuctionLost"`)

* `IndustryTeamAuctionWon` (value: `"IndustryTeamAuctionWon"`)

* `InfrastructureHubBillAboutToExpire` (value: `"InfrastructureHubBillAboutToExpire"`)

* `InsuranceExpirationMsg` (value: `"InsuranceExpirationMsg"`)

* `InsuranceFirstShipMsg` (value: `"InsuranceFirstShipMsg"`)

* `InsuranceInvalidatedMsg` (value: `"InsuranceInvalidatedMsg"`)

* `InsuranceIssuedMsg` (value: `"InsuranceIssuedMsg"`)

* `InsurancePayoutMsg` (value: `"InsurancePayoutMsg"`)

* `InvasionCompletedMsg` (value: `"InvasionCompletedMsg"`)

* `InvasionSystemLogin` (value: `"InvasionSystemLogin"`)

* `InvasionSystemStart` (value: `"InvasionSystemStart"`)

* `JumpCloneDeletedMsg1` (value: `"JumpCloneDeletedMsg1"`)

* `JumpCloneDeletedMsg2` (value: `"JumpCloneDeletedMsg2"`)

* `KillReportFinalBlow` (value: `"KillReportFinalBlow"`)

* `KillReportVictim` (value: `"KillReportVictim"`)

* `KillRightAvailable` (value: `"KillRightAvailable"`)

* `KillRightAvailableOpen` (value: `"KillRightAvailableOpen"`)

* `KillRightEarned` (value: `"KillRightEarned"`)

* `KillRightUnavailable` (value: `"KillRightUnavailable"`)

* `KillRightUnavailableOpen` (value: `"KillRightUnavailableOpen"`)

* `KillRightUsed` (value: `"KillRightUsed"`)

* `LocateCharMsg` (value: `"LocateCharMsg"`)

* `MadeWarMutual` (value: `"MadeWarMutual"`)

* `MercOfferRetractedMsg` (value: `"MercOfferRetractedMsg"`)

* `MercOfferedNegotiationMsg` (value: `"MercOfferedNegotiationMsg"`)

* `MissionCanceledTriglavian` (value: `"MissionCanceledTriglavian"`)

* `MissionOfferExpirationMsg` (value: `"MissionOfferExpirationMsg"`)

* `MissionTimeoutMsg` (value: `"MissionTimeoutMsg"`)

* `MoonminingAutomaticFracture` (value: `"MoonminingAutomaticFracture"`)

* `MoonminingExtractionCancelled` (value: `"MoonminingExtractionCancelled"`)

* `MoonminingExtractionFinished` (value: `"MoonminingExtractionFinished"`)

* `MoonminingExtractionStarted` (value: `"MoonminingExtractionStarted"`)

* `MoonminingLaserFired` (value: `"MoonminingLaserFired"`)

* `MutualWarExpired` (value: `"MutualWarExpired"`)

* `MutualWarInviteAccepted` (value: `"MutualWarInviteAccepted"`)

* `MutualWarInviteRejected` (value: `"MutualWarInviteRejected"`)

* `MutualWarInviteSent` (value: `"MutualWarInviteSent"`)

* `NPCStandingsGained` (value: `"NPCStandingsGained"`)

* `NPCStandingsLost` (value: `"NPCStandingsLost"`)

* `OfferToAllyRetracted` (value: `"OfferToAllyRetracted"`)

* `OfferedSurrender` (value: `"OfferedSurrender"`)

* `OfferedToAlly` (value: `"OfferedToAlly"`)

* `OfficeLeaseCanceledInsufficientStandings` (value: `"OfficeLeaseCanceledInsufficientStandings"`)

* `OldLscMessages` (value: `"OldLscMessages"`)

* `OperationFinished` (value: `"OperationFinished"`)

* `OrbitalAttacked` (value: `"OrbitalAttacked"`)

* `OrbitalReinforced` (value: `"OrbitalReinforced"`)

* `OwnershipTransferred` (value: `"OwnershipTransferred"`)

* `RaffleCreated` (value: `"RaffleCreated"`)

* `RaffleExpired` (value: `"RaffleExpired"`)

* `RaffleFinished` (value: `"RaffleFinished"`)

* `ReimbursementMsg` (value: `"ReimbursementMsg"`)

* `ResearchMissionAvailableMsg` (value: `"ResearchMissionAvailableMsg"`)

* `RetractsWar` (value: `"RetractsWar"`)

* `SeasonalChallengeCompleted` (value: `"SeasonalChallengeCompleted"`)

* `SovAllClaimAquiredMsg` (value: `"SovAllClaimAquiredMsg"`)

* `SovAllClaimLostMsg` (value: `"SovAllClaimLostMsg"`)

* `SovCommandNodeEventStarted` (value: `"SovCommandNodeEventStarted"`)

* `SovCorpBillLateMsg` (value: `"SovCorpBillLateMsg"`)

* `SovCorpClaimFailMsg` (value: `"SovCorpClaimFailMsg"`)

* `SovDisruptorMsg` (value: `"SovDisruptorMsg"`)

* `SovStationEnteredFreeport` (value: `"SovStationEnteredFreeport"`)

* `SovStructureDestroyed` (value: `"SovStructureDestroyed"`)

* `SovStructureReinforced` (value: `"SovStructureReinforced"`)

* `SovStructureSelfDestructCancel` (value: `"SovStructureSelfDestructCancel"`)

* `SovStructureSelfDestructFinished` (value: `"SovStructureSelfDestructFinished"`)

* `SovStructureSelfDestructRequested` (value: `"SovStructureSelfDestructRequested"`)

* `SovereigntyIHDamageMsg` (value: `"SovereigntyIHDamageMsg"`)

* `SovereigntySBUDamageMsg` (value: `"SovereigntySBUDamageMsg"`)

* `SovereigntyTCUDamageMsg` (value: `"SovereigntyTCUDamageMsg"`)

* `StationAggressionMsg1` (value: `"StationAggressionMsg1"`)

* `StationAggressionMsg2` (value: `"StationAggressionMsg2"`)

* `StationConquerMsg` (value: `"StationConquerMsg"`)

* `StationServiceDisabled` (value: `"StationServiceDisabled"`)

* `StationServiceEnabled` (value: `"StationServiceEnabled"`)

* `StationStateChangeMsg` (value: `"StationStateChangeMsg"`)

* `StoryLineMissionAvailableMsg` (value: `"StoryLineMissionAvailableMsg"`)

* `StructureAnchoring` (value: `"StructureAnchoring"`)

* `StructureCourierContractChanged` (value: `"StructureCourierContractChanged"`)

* `StructureDestroyed` (value: `"StructureDestroyed"`)

* `StructureFuelAlert` (value: `"StructureFuelAlert"`)

* `StructureImpendingAbandonmentAssetsAtRisk` (value: `"StructureImpendingAbandonmentAssetsAtRisk"`)

* `StructureItemsDelivered` (value: `"StructureItemsDelivered"`)

* `StructureItemsMovedToSafety` (value: `"StructureItemsMovedToSafety"`)

* `StructureLostArmor` (value: `"StructureLostArmor"`)

* `StructureLostShields` (value: `"StructureLostShields"`)

* `StructureOnline` (value: `"StructureOnline"`)

* `StructureServicesOffline` (value: `"StructureServicesOffline"`)

* `StructureUnanchoring` (value: `"StructureUnanchoring"`)

* `StructureUnderAttack` (value: `"StructureUnderAttack"`)

* `StructureWentHighPower` (value: `"StructureWentHighPower"`)

* `StructureWentLowPower` (value: `"StructureWentLowPower"`)

* `StructuresJobsCancelled` (value: `"StructuresJobsCancelled"`)

* `StructuresJobsPaused` (value: `"StructuresJobsPaused"`)

* `StructuresReinforcementChanged` (value: `"StructuresReinforcementChanged"`)

* `TowerAlertMsg` (value: `"TowerAlertMsg"`)

* `TowerResourceAlertMsg` (value: `"TowerResourceAlertMsg"`)

* `TransactionReversalMsg` (value: `"TransactionReversalMsg"`)

* `TutorialMsg` (value: `"TutorialMsg"`)

* `WarAdopted_` (value: `"WarAdopted "`)

* `WarAllyInherited` (value: `"WarAllyInherited"`)

* `WarAllyOfferDeclinedMsg` (value: `"WarAllyOfferDeclinedMsg"`)

* `WarConcordInvalidates` (value: `"WarConcordInvalidates"`)

* `WarDeclared` (value: `"WarDeclared"`)

* `WarEndedHqSecurityDrop` (value: `"WarEndedHqSecurityDrop"`)

* `WarHQRemovedFromSpace` (value: `"WarHQRemovedFromSpace"`)

* `WarInherited` (value: `"WarInherited"`)

* `WarInvalid` (value: `"WarInvalid"`)

* `WarRetracted` (value: `"WarRetracted"`)

* `WarRetractedByConcord` (value: `"WarRetractedByConcord"`)

* `WarSurrenderDeclinedMsg` (value: `"WarSurrenderDeclinedMsg"`)

* `WarSurrenderOfferMsg` (value: `"WarSurrenderOfferMsg"`)




