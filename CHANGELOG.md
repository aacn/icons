# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [4.1.2] - 2026-08-24

### Fixed

- Replaced the react invalid DOM attribute `clip-path` with `clipPath`.

## [4.1.1] - 2026-08-05

### Renamed Icons

- `outline/CarTruck2Icon` → `outline/CarTruck1Icon`

### Removed Icons

- `outline/CarTruck1Icon`
- `outline/Card1Icon`
- `outline/ArrowDownTrayIcon`

## [4.1.0] - 2026-08-04

## Added

- Generated the ESM root as a per-icon re-export barrel so bundlers can follow
  named imports to individual icon modules while preserving the existing root
  import syntax.
- Added Next.js import-optimization guidance for keeping named imports concise.

## Changed

- Preserved default and category namespace compatibility through the generated
  legacy ESM aggregator.
- Added strict generated declaration type-checking to the package test command.

## Fixed

- Fixed root declarations leaking the loader and React-free identifier APIs.
- Fixed duplicate default declarations in `dist/index.d.ts`.
- Fixed NodeNext declaration resolution for generated type imports.

## [4.0.0] - 2026-08-04

## Added

- Added `@native-systems/icons/loader` with `getIconLoader`, `loadIconById`,
  `isNativeIconId`, and the corresponding public types for safely resolving
  CMS-provided icon identifiers.
- Added independently importable ESM and CommonJS modules, plus declarations,
  for every icon under `@native-systems/icons/icons/*`.
- Added a generated `NativeIconId` union shared by the loader and the typed
  React-free `iconNames` collection.

## Changed

- Preserved icon module boundaries so dynamic imports produce separate icon
  chunks instead of loading the complete root bundle.
- Marked the package as side-effect-free to improve consumer tree shaking.
- Updated React development dependencies to the React 19.2 release line.

## Compatibility

- Existing named imports from `@native-systems/icons` remain supported.
- Existing CommonJS consumers remain supported.
- The loader is exposed through its own subpath and is not re-exported from the
  legacy root barrel.

## [3.8.0] - 2026-08-02

## Added

### Outline

- `BacteriophageIcon`
- `BirthdayCakeIcon`
- `CameraAddIcon`
- `CameraCheckIcon`
- `CameraNoIcon`
- `CameraRemoveIcon`
- `CameraSettingsIcon`
- `CameraSubtractIcon`
- `CarbohydratesIcon`
- `DiamondIcon`
- `EggEasterIcon`
- `EggIcon`
- `FortIcon`
- `Fuel102Icon`
- `Fuel98Icon`
- `FuelSuperPlusIcon`
- `FuelstationIcon`
- `FungiIcon`
- `FunnelAddIcon`
- `FunnelRemoveIcon`
- `FunnelResetIcon`
- `FunnelSettingsIcon`
- `FunnelStarIcon`
- `FunnelSubtractIcon`
- `GroupAddIcon`
- `GroupCheckIcon`
- `GroupNoIcon`
- `GroupRefreshIcon`
- `GroupRemoveIcon`
- `GroupSettingsIcon`
- `GroupSubtractIcon`
- `GroupWatchIcon`
- `HeartBrokenIcon`
- `LaddderIcon`
- `LeaderboardIcon`
- `LipidsIcon`
- `NewYearIcon`
- `PalmTreeIcon`
- `PillIcon`
- `PortLightningIcon`
- `ProteinsIcon`
- `RabbitIcon`
- `SearchHistoryIcon`
- `SnowmanIcon`
- `Streetsign100Icon`
- `Streetsign130Icon`
- `StreetsignUnlimitedIcon`
- `TaskAddIcon`
- `TaskCheckIcon`
- `TaskPlaneTravelIcon`
- `TaskRemoveIcon`
- `TaskSettingsIcon`
- `TaskStarIcon`
- `TaskSubtractIcon`
- `TaskTrashIcon`
- `TaskWatchIcon`
- `ThinkingLeftIcon`
- `ThinkingRightIcon`
- `ToriiIcon`
- `TreePineChristmasIcon`
- `WeddingHeartIcon`
- `WeddingIcon`

## Changed

### Outline

- `AlarmClockIcon`
- `Bed2Icon`
- `DisabilityIcon`
- `FamilyIcon`
- `GroupIcon`
- `MedalIcon`
- `RaceIcon`

### Renamed Icons

- `outline/AlarmClockAddIcon` → `outline/AlarmClockAddIcon`
- `outline/AlarmClockCheckIcon` → `outline/AlarmClockCheckIcon`
- `outline/AlarmClockNoIcon` → `outline/AlarmClockNoIcon`
- `outline/AlarmClockRemoveIcon` → `outline/AlarmClockRemoveIcon`
- `outline/AlarmClockSettingsIcon` → `outline/AlarmClockSettingsIcon`
- `outline/AlarmClockSubtractIcon` → `outline/AlarmClockSubtractIcon`
- `outline/GrandpaParentChildIcon` → `outline/GitGrandpaParentChildIcon`
- `outline/Parent2ChildsIcon` → `outline/GitParent2ChildsIcon`
- `outline/Parent3ChildsIcon` → `outline/GitParent3ChildsIcon`
- `outline/ParentIcon` → `outline/GitParentIcon`
- `outline/Medal51Icon` → `outline/MedalCheckIcon`

## [3.7.0] - 2026-07-28

## Fixed

- Fixed invalid `clip-path` argument to proper React spelling of `clipPath`.

### Renamed Icons

- `outline/AlarmclockIcon` → `outline/AlarmClockIcon`

## Added

### Outline

- `AlarmClockAddIcon`
- `AlarmClockCheckIcon`
- `AlarmClockNoIcon`
- `AlarmClockRemoveIcon`
- `AlarmClockSettingsIcon`
- `AlarmClockSubtractIcon`
- `AnchorIcon`
- `ArmchairIcon`
- `AssistantIcon`
- `BerlinAlexIcon`
- `BerlinBrandenburgerTorIcon`
- `BirdIcon`
- `CarSlopeIcon`
- `CatIcon`
- `ChurchIcon`
- `CourtIcon`
- `CrutchIcon`
- `CutIcon`
- `DabTunerIcon`
- `DateAddIcon`
- `DateAlertIcon`
- `DateCheckedIcon`
- `DateGroupMeetingIcon`
- `DatePlaneTravelIcon`
- `DateRefreshIcon`
- `DateSettingsIcon`
- `DateStarIcon`
- `DateSubtractIcon`
- `DateTrashIcon`
- `DateUserIcon`
- `DogIcon`
- `EmailCheckIcon`
- `EmailLockedIcon`
- `EmailRefreshIcon`
- `EmailStarIcon`
- `EmailUnlockedIcon`
- `EmailUserIcon`
- `FactoryIcon`
- `FemaleIcon`
- `FileRefreshIcon`
- `FileStarIcon`
- `FileTrashIcon`
- `FileUserIcon`
- `FishingHookIcon`
- `FolderAddIcon`
- `FolderAlertIcon`
- `FolderCheckedIcon`
- `FolderLockedIcon`
- `FolderRemoveIcon`
- `FolderSearchIcon`
- `FolderSubtractIcon`
- `FolderTrashIcon`
- `FolderUnlockedIcon`
- `FolderUserIcon`
- `FuelIcon`
- `GearShiftIcon`
- `HamburgElbphilharmonieIcon`
- `HandClick2Icon`
- `HandInteractIcon`
- `HandPointingIcon`
- `HelicopterIcon`
- `ImageAddIcon`
- `ImageCheckedIcon`
- `ImageDownloadIcon`
- `ImageNoIcon`
- `ImageRefreshIcon`
- `ImageSettingsIcon`
- `ImageSubtractIcon`
- `ImageTrashbinIcon`
- `ImageUploadIcon`
- `ImageUserIcon`
- `IndiaTajmahalIcon`
- `LaptopAlert2Icon`
- `LaptopAlertIcon`
- `LaptopDownloadIcon`
- `LaptopLockedIcon`
- `LaptopNoIcon`
- `LaptopRefreshIcon`
- `LaptopSecurityIcon`
- `LaptopSettingsIcon`
- `LaptopUnlockedIcon`
- `LaptopUploadIcon`
- `LaptopUserIcon`
- `LinkedAddIcon`
- `LinkedAlertIcon`
- `LinkedCheckedIcon`
- `LinkedLockedIcon`
- `LinkedRemoveIcon`
- `LinkedSubtractIcon`
- `LinkedUnlockedIcon`
- `LondonBigBenIcon`
- `MagnetIcon`
- `MailAlertIcon`
- `MailTrashIcon`
- `MaleIcon`
- `MenIcon`
- `MoneyChangeIcon`
- `MoneyCheckedIcon`
- `MoneyNoCashIcon`
- `MotorHomeIcon`
- `MunichFrauenkircheIcon`
- `NewYorkStatueOfLibertyIcon`
- `ParisEiffelTowerIcon`
- `PenIcon`
- `PeopleIncreaseIcon`
- `RimsIcon`
- `RiodejaneiroJesusStatueIcon`
- `RoadIcon`
- `RomeColosseumIcon`
- `SecurityAlertIcon`
- `SecurityChecked2Icon`
- `SecurityEyeIcon`
- `SecurityInfoIcon`
- `SecurityLockedIcon`
- `SecurityOffIcon`
- `SecurityRefreshIcon`
- `SecurityUnlockedIcon`
- `SetSquareIcon`
- `SharkIcon`
- `SliderNoIcon`
- `SliderYesIcon`
- `SmartphoneAlert2Icon`
- `SmartphoneAlertIcon`
- `SmartphoneDownloadIcon`
- `SmartphoneLockedIcon`
- `SmartphoneNoIcon`
- `SmartphoneRefreshIcon`
- `SmartphoneSecurityIcon`
- `SmartphoneUnlockedIcon`
- `SmartphoneUploadIcon`
- `SmartphoneUserIcon`
- `SmileyNeutralIcon`
- `SmileySadIcon`
- `SolarPanelIcon`
- `SortHighToLowIcon`
- `SortLowToHighIcon`
- `SpiderIcon`
- `StudyIcon`
- `SunriseSunsetIcon`
- `SydneyOperaIcon`
- `TextAddIcon`
- `TextAlertIcon`
- `TextCheckIcon`
- `TextDownloadIcon`
- `TextEyeIcon`
- `TextNoIcon`
- `TextRemoveIcon`
- `TextSettingsIcon`
- `TextStarIcon`
- `TextSubtractIcon`
- `TextTrashIcon`
- `TextUploadIcon`
- `TokyoSkytreeIcon`
- `TokyoTowerIcon`
- `TropicalIslandIcon`
- `UserAlert2Icon`
- `UserAlertIcon`
- `UserCheckedIcon`
- `UserIcon`
- `UserInfoIcon`
- `UserLockedIcon`
- `UserNoIcon`
- `UserPlusIcon`
- `UserRemoveIcon`
- `UserSecurityIcon`
- `UserSettingIcon`
- `UserStarIcon`
- `UserSubtractIcon`
- `UserTrashIcon`
- `UserUnlockedIcon`
- `UserWatchIcon`
- `VideoCallIcon`
- `WaleIcon`
- `WebsiteBrowserIcon`
- `WindTurbineIcon`
- `WomanIcon`

## [3.6.0] - 2026-07-13

## Added

### Outline

- `AdaptiveCruiseControlIcon`
- `AgentsIcon`
- `AirConditioningIcon`
- `AirbagIcon`
- `AlarmIcon`
- `AndIcon`
- `AutomaticIcon`
- `AwningIcon`
- `BarsIcon`
- `Bed3Icon`
- `Bed2Icon`
- `BeerIcon`
- `BoxIcon`
- `BoxesIcon`
- `CarLockedIcon`
- `CarTruck2Icon`
- `CarUsedIcon`
- `CatalysatorIcon`
- `CdIcon`
- `ChestIcon`
- `ChestOpenIcon`
- `CloudAppIcon`
- `CoffeeIcon`
- `CoinMedal1Icon`
- `CoinMedalStarIcon`
- `CommitIcon`
- `ComunalIcon`
- `ConversationIcon`
- `CoinMedalCheckIcon`
- `E10CheckIcon`
- `EarthMapIcon`
- `ElectricRoofIcon`
- `FileCheckIcon`
- `FileLockedIcon`
- `FileMusicIcon`
- `FilePreviewEyeIcon`
- `FileUnlockedIcon`
- `HailIcon`
- `HatIcon`
- `HeatedHandleIcon`
- `HighRoofIcon`
- `IceCreamIcon`
- `KickstarterIcon`
- `LightCurveIcon`
- `LightFogBackIcon`
- `LightFogIcon`
- `MapTreasureIcon`
- `MarkdownIcon`
- `Medal10Icon`
- `Medal11Icon`
- `Medal1Icon`
- `Medal2Icon`
- `Medal3Icon`
- `Medal4Icon`
- `Medal51Icon`
- `Medal5Icon`
- `MovieCameraFilmIcon`
- `NandIcon`
- `NoIcon`
- `NonSmokingIcon`
- `NorIcon`
- `OrIcon`
- `PantsIcon`
- `PartitionIcon`
- `Permit2Icon`
- `PermitIcon`
- `PopsicleIcon`
- `PullRequestIcon`
- `RoofRailsIcon`
- `ServiceLogbookIcon`
- `ServosteeringWheel1Icon`
- `ServosteeringWheelIcon`
- `ShirtIcon`
- `Suitcase2Icon`
- `SuitcaseIcon`
- `SunroofIcon`
- `SunroofSettingsIcon`
- `Suspension2Icon`
- `TaxiIcon`
- `TractionControlIcon`
- `TrailerHitchIcon`
- `TruckRampIcon`
- `WcIcon`
- `WeightIcon`
- `WheelIcon`
- `WindowElectricIcon`
- `WindowIcon`
- `XnorIcon`
- `XorIcon`
- `YesIcon`

## [3.5.1] - 2026-07-13

## Changed

- Lowered supported react version from 19 to 17.

## [3.5.0] - 2026-07-11

## Added

- React-free `@native-systems/icons/identifiers` export with all public icon names.

## [3.4.2] - 2026-07-05

## Fixed

Several icons still used the js-style attribute declaration like `stroke-linecap`. This has been changed to use proper
react naming instead. (e.g. `strokeLinecap`)

## [3.4.1] - 2026-07-03

## Changed

### Outline

- `BookmarkIcon`
- `BookmarkRemoveIcon`
- `FunnelIcon`
- `HandIcon`

## [3.4.0] - 2026-07-03

## Added

### Outline

- `Ai2Icon`
- `AiIcon`
- `AiImageIcon`
- `AiLayoutIcon`
- `AiRepairIcon`
- `AiSearchIcon`
- `AiTextIcon`
- `AlignBottonHorizontalIcon`
- `AlignLeftVerticalIcon`
- `AlignMiddleHorizontalIcon`
- `AlignMiddleVerticalIcon`
- `AlignRightVerticalIcon`
- `AlignTopHorizontalIcon`
- `ArrowOut2Icon`
- `ArrowsIn2Icon`
- `BacteriaIcon`
- `BadmintonIcon`
- `BarChartHorizontal2Icon`
- `BasketballIcon`
- `BoneIcon`
- `BowlingIcon`
- `BroomIcon`
- `CampingIcon`
- `Cerificate2Icon`
- `CerificateIcon`
- `ChemicalIcon`
- `ColorPaletteIcon`
- `DnaIcon`
- `FlashlightIcon`
- `FlipHorizontalIcon`
- `FlipVerticalIcon`
- `FossilIcon`
- `GolfBallIcon`
- `GolfIcon`
- `HeartRateIcon`
- `LightningIcon`
- `LinkedIcon`
- `MedalIcon`
- `MicroscopeIcon`
- `OfflineIcon`
- `PortDisplayPortIcon`
- `PortHdmiIcon`
- `PortUsbIcon`
- `PortUsbcIcon`
- `SatelliteIcon`
- `SaveIcon`
- `ScienceIcon`
- `SecurityCamIcon`
- `ShoeIcon`
- `Shortcut2Icon`
- `Shortcut3Icon`
- `Shortcut4Icon`
- `Shortcut5Icon`
- `SignalIcon`
- `SoccerIcon`
- `TargetBowIcon`
- `TelescopeIcon`
- `TennisIcon`
- `ToothbrushIcon`
- `UsbStickIcon`
- `VirusIcon`
- `VolleyballIcon`
- `VulcanIcon`
- `WalletFullIcon`
- `WalletIcon`

## Changed

### Outline

- `IdentityIcon`

### Moved Icons

- `filled/EnergyIcon` → `outline/EnergyIcon`

## [3.3.0] - 2026-06-29

## Added

### Outline

- `AirBaloonIcon`
- `BaloonIcon`
- `BrakesIcon`
- `CalculatorIcon`
- `CandleIcon`
- `CandyIcon`
- `CarFrontIcon`
- `ChoiceIcon`
- `CityIcon`
- `CompassIcon`
- `ContractIcon`
- `CountrysideIcon`
- `FaceId2Icon`
- `FaceIdIcon`
- `FenceIcon`
- `FilePreviewIcon`
- `FingerprintIcon`
- `FingerprintScan2Icon`
- `FingerprintScanIcon`
- `FlowerSpringIcon`
- `GhostIcon`
- `GlassesIcon`
- `HandshakeIcon`
- `HouseApartmentIcon`
- `HouseMoneyRealEstateIcon`
- `HouseSearchRealEstateIcon`
- `HousesIcon`
- `KeyboardIcon`
- `KitchenKnifeIcon`
- `LeafFallIcon`
- `LeafIcon`
- `MontageIcon`
- `MouseIcon`
- `PinIcon`
- `NoticeIcon`
- `PersonAddIcon`
- `PersonRemoveIcon`
- `RecycleIcon`
- `RepairIcon`
- `RestaurationIcon`
- `ScrewdriverIcon`
- `Service2Icon`
- `ShareIcon`
- `SignSaleIcon`
- `SignSoldIcon`
- `SocialNetworkIcon`
- `SubmarineIcon`
- `SuburbsIcon`
- `TrafficJamIcon`
- `TrafficLightIcon`
- `UmbrellaIcon`
- `WindIcon`
- `WindyIcon`
- `AiAppIconIcon`
- `AiStar2Icon`
- `AiStarIcon`

## Changed

- `outline/SecurityIcon`

### Renamed Icons

- `outline/PinIcon` → `outline/NavigationPinIcon`
- `outline/ArrowUturnUp` → `outline/ArrowUturnUpIcon`


## [3.2.1] - 2026-06-25

## Removed

### Outline

- `AndroidPushPreviewIcon`
- `IOSPushPreviewIcon`


## [3.2.0] - 2026-06-24

## Added

### Chars

- `H1Icon`
- `H2Icon`
- `H3Icon`
- `ItalicIcon`
- `MinusIcon`
- `PlusIcon`

### Outline

- `ArrowUturnLeftIcon`
- `ArrowUturnRightIcon`
- `ArrowsLeftRightIcon`
- `ArrowsUpDownIcon`
- `BatteryEmptyIcon`
- `BatteryFullIcon`
- `BatteryHalfIcon`
- `BookmarkIcon`
- `BookmarkRemoveIcon`
- `BrushSmallIcon`
- `CallInIcon`
- `CallMissedIcon`
- `CallOutIcon`
- `Checkbox2Icon`
- `ChevronDoubleDownIcon`
- `ChevronDoubleLeftIcon`
- `ChevronDoubleRightIcon`
- `ChevronDoubleUpIcon`
- `ClipboardCheckIcon`
- `ClipboardIcon`
- `CloudDownloadIcon`
- `CloudUploadIcon`
- `CodeBracketIcon`
- `CodeBracketSquareIcon`
- `CodeCommandSquareIcon`
- `CompactIcon`
- `CurlyBracketLeftIcon`
- `CurlyBracketRightIcon`
- `DrawerInIcon`
- `DrawerOutIcon`
- `FadeAnimationIcon`
- `FileChartIcon`
- `FileDollarIcon`
- `FileDownloadIcon`
- `FileEuroIcon`
- `FileMinusIcon`
- `FilePlusIcon`
- `FilePoundIcon`
- `FileSearchIcon`
- `FileUploadIcon`
- `FilesIcon`
- `FolderDownloadIcon`
- `FolderIcon`
- `FolderMinusIcon`
- `FolderPlusIcon`
- `FolderUploadIcon`
- `ForwardIcon`
- `FunnelIcon`
- `GifIcon`
- `HandIcon`
- `HouseModernIcon`
- `IdentityIcon`
- `InternetIcon`
- `LayoutIcon`
- `Menu2Icon`
- `Menu3Icon`
- `MouseClickIcon`
- `MouseHoverIcon`
- `PaperclipIcon`
- `PauseCircleIcon`
- `PausePlayIcon`
- `PencilSquareIcon`
- `PlayCircleIcon`
- `PowerIcon`
- `PresentationChartIcon`
- `PrinterIcon`
- `PuzzleCompleteIcon`
- `QuestionMarkCircleIcon`
- `RadioIcon`
- `ResetIcon`
- `RocketIcon`
- `ScaleAnimationIcon`
- `SettingsHorizontalIcon`
- `SettingsVerticalIcon`
- `TabletIcon`
- `TextAlignCenterIcon`
- `TextAlignLeftIcon`
- `TextAlignRightIcon`
- `TextShortenIcon`
- `TextWidenIcon`
- `TvIcon`
- `TvInfoInsertIcon`
- `TvVintageIcon`
- `WidgetRefreshIcon`
- `WidgetResetIcon`
- `XRotationAnimationIcon`
- `YRotationAnimationIcon`

## Changed

### Renamed Icons

- `outline/ArrowUpCurvedIcon` → `outline/ArrowUturnUp`
- `outline/HastagIcon` → `chars/HashtagIcon`

### Moved Icons

- `outline/PiIcon` → `chars/PiIcon`
- `outline/HastagIcon` → `chars/HashtagIcon`
- `outline/SlashIcon` → `chars/SlashIcon`

## [3.1.1] - 2026-06-20

### Added

### Outline

- `AndroidPushPreviewIcon`
- `IOSPushPreviewIcon`

## [3.1.0] - 2026-06-20

### Added

### Outline

- `AppIconIcon`
- `BellOffIcon`
- `CarStarIcon`
- `DrawerEmptyIcon`
- `DrawerFullIcon`
- `HammerIcon`
- `WidgetAddIcon`
- `WidgetPopIcon`
- `WidgetRemoveIcon`
- `WidgetsIcon`
- `WrenchIcon`


## [3.0.0] - 2026-06-18

## Added

### Chars

- `CharacterFIcon`
- `CommercialAndIcon`
- `Decimal2Icon`
- `DecimalIcon`
- `InfinityIcon`
- `MultiplyIcon`
- `MultiplyStarIcon`
- `RoundIcon`

### Outline

- `AccessibilityIcon`
- `AlarmClockIcon`
- `AppleIcon`
- `ArrowDownIcon`
- `ArrowIcon`
- `ArrowUpCurvedIcon`
- `AverageIcon`
- `BagAddIcon`
- `BagRemoveIcon`
- `BerlinIcon`
- `BottleIcon`
- `BracketLeftIcon`
- `BracketRightIcon`
- `BrokenBottleIcon`
- `CactusIcon`
- `CalendarIcon`
- `Camera1Icon`
- `CarTruck1Icon`
- `CarVanBus2Icon`
- `CardIcon`
- `CartAddIcon`
- `CartRemoveIcon`
- `CaviarIcon`
- `CloverIcon`
- `CoinStarIcon`
- `CookingIcon`
- `CrownIcon`
- `DeleteSpacesIcon`
- `DiceIcon`
- `DrinkIcon`
- `FireIcon`
- `FishIcon`
- `GlasIcon`
- `HastagIcon`
- `LinealIcon`
- `LinkIcon`
- `MedicineIcon`
- `MicrowaveIcon`
- `MushroomIcon`
- `PackageIcon`
- `PaintbrushIcon`
- `PanIcon`
- `ParralelHorizontalIcon`
- `ParralelVertical2Icon`
- `ParralelVerticalIcon`
- `PauseIcon`
- `PepperIcon`
- `PiIcon`
- `PotIcon`
- `ProportionalVertical1Icon`
- `PuzzleIcon`
- `RainbowIcon`
- `RamenIcon`
- `RefridgeratorIcon`
- `RobotIcon`
- `SaleLabelDollarIcon`
- `SaleLabelPercentIcon`
- `SalmonIcon`
- `SaltIcon`
- `SaltPepperIcon`
- `Ship2Icon`
- `ShippingIcon`
- `SlashIcon`
- `SparklesIcon`
- `Speech2Icon`
- `Speech3Icon`
- `SpeechStarIcon`
- `SpicyIcon`
- `SquareBracketLeftIcon`
- `SquareBracketRightIcon`
- `SteakIcon`
- `StoRIcon`
- `TableIcon`
- `TableRoundIcon`
- `ThunderIcon`
- `Time1Icon`
- `TimeIcon`
- `ToiletpaperIcon`
- `TomatoIcon`
- `TreeIcon`
- `TreePineIcon`
- `TripleDotsVerticalIcon`
- `TruffleIcon`
- `UnavailableIcon`
- `WagyuSteakIcon`
- `WashingMachineIcon`
- `WineIcon`
- `XMarkIcon`
- `ZoomInIcon`
- `ZoomOutIcon`

## Changed

### Renamed Icons

- `outline/EarthAmerikaIcon` → `outline/EarthAmericaIcon`
- `outline/EarthEuropaIcon` → `outline/EarthEuropeIcon`
- `outline/QrcodeIcon` → `outline/QrCodeIcon`
- `outline/LineChartIcon` → `outline/LineChart2Icon`
- `outline/Parent2childsIcon` → `outline/Parent2ChildsIcon`
- `outline/CsvIcon` → `outline/CSVIcon`
- `outline/UpercaseIcon` → `chars/UppercaseIcon`

### Moved Icons

- `filled/CheckIcon` → `outline/CheckIcon`
- `filled/HouseIcon` → `outline/HouseIcon`
- `filled/Star2Icon` → `outline/Star2Icon`
- `filled/WinterIcon` → `outline/WinterIcon`
- `outline/LowercaseIcon` → `chars/LowercaseIcon`

## Removed

### Chars

- `CharacterE1Icon`

### Filled

- `StarsIcon`
- `XIcon`

### Outline

- `AndroidPushPreviewIcon`
- `ArrowDown2Icon`
- `BadgeIcon`
- `BookOpenIcon`
- `ColorIcon`
- `DanceBarAnimationIcon`
- `DecimalPlacesOneIcon`
- `DecimalPlacesTwoIcon`
- `DecimalPlacesZeroIcon`
- `FormatsIcon`
- `IOSPushPreviewIcon`
- `LeadListIcon2`
- `LinearBarAnimationIcon`
- `LiveModeOffXIcon`
- `MultiplePollIcon`
- `ParallelBarAnimationIcon`
- `ParallelHorizontal1Icon`
- `ParallelHorizontalIcon`
- `ParallelVerticalIcon`
- `Porthole2Icon`
- `ProportionalBarAnimationIcon`
- `ProportionalHorizontal1Icon`
- `ScatterPlotIcon`
- `Send2Icon`
- `UploadIcon`
- `VerticalPointsIcon`

## [2.4.0] - 2026-05-26

## Added

## Outline 

- `ArrowDown2Icon`
- `ArrowDownCircleIcon`
- `ArrowDownLeftCircleIcon`
- `ArrowDownLeftIcon`
- `ArrowDownRightCircleIcon`
- `ArrowDownRightIcon`
- `ArrowDownTrayIcon`
- `ArrowLeftCircleIcon`
- `ArrowLeftIcon`
- `ArrowLeftRightIcon`
- `ArrowLeftStartOnSquareIcon`
- `ArrowOutIcon`
- `ArrowRightCircleIcon`
- `ArrowRightIcon`
- `ArrowRightStartOnSquareIcon`
- `ArrowsInIcon`
- `ArrowUpCircleIcon`
- `ArrowUpDownIcon`
- `ArrowUpIcon`
- `ArrowUpLeftCircleIcon`
- `ArrowUpLeftIcon`
- `ArrowUpRightIcon`
- `ArrowUpRightCircleIcon`
- `ArrowUpTrayIcon`
- `ArrowUpRightIcon`
- `GrandpaParentChildIcon`
- `Parent2childsIcon`
- `Parent3childsIcon`
- `ParentIcon`
- `PlayIcon`
- `Send2Icon`
- `VerticalPointsIcon`

## [2.3.3] - 2026-05-20

## Fixed

### Re-included Outline Exports

- `ProportionalBarAnimationIcon`

## [2.3.2] - 2026-05-19

## Fixed

### Re-included Outline Exports

- `MapPinIcon`


## [2.3.1] - 2026-05-19

## Fixed

### Re-included Outline Exports

- `CsvIcon`
- `DanceBarAnimationIcon`
- `DecimalPlacesOneIcon`
- `DecimalPlacesTwoIcon`
- `DecimalPlacesZeroIcon`
- `EarthIcon`
- `EducationIcon`
- `FormatsIcon`
- `IOSPushPreviewIcon`
- `LineChart2Icon`
- `LinearBarAnimationIcon`
- `LiveModeOffIcon`
- `LiveModeOffXIcon`
- `LiveModeOnCheckIcon`
- `LiveModeOnIcon`
- `LiveOnCheckIcon`
- `LiveOnXIcon`
- `LockCheckIcon`
- `LockIcon`
- `LockOpenIcon`
- `LockOpenXIcon`
- `MultipleChoiceIcon`
- `MultiplePollIcon`
- `ParallelBarAnimationIcon`
- `PieChartIcon`
- `ScatterPlotIcon`
- `SemiCircleChartIcon`
- `ShortcutIcon`

## [2.3.0] - 2026-05-19

## Added

### Outline

- `Anonymous2Icon`
- `AnonymousIcon`
- `BalanceIcon`
- `ChevronLeftIcon`
- `ChevronUpIcon`
- `ExtensionIcon`
- `InfoCircleIcon`
- `LeadListIcon2`
- `LowercaseIcon`
- `NormalizeSpacesIcon`
- `ParkingAssistent1Icon`
- `ParkingAssistent2Icon`
- `QrCodeIcon`
- `SleepDetectionIcon`
- `SpaceIcon`
- `SteeringWheelIcon`
- `StreetSign30Icon`
- `StreetSign50Icon`
- `StreetSign60Icon`
- `StreetSign90Icon`
- `TrimIcon`
- `UpercaseIcon`
- `UserList2Icon` (Falsely missing export)
- `UserListIcon` (Falsely missing export)
- `XCircleIcon`

## Changed

### Renamed Icons

- `outline/AddIcon` → `outline/AddCircleIcon`
- `outline/MinusIcon` → `outline/MinusCircleIcon`
- `outline/WindschieldHeatingIcon` → `outline/WindshieldHeatingIcon`
- `outline/WindschieldIcon` → `outline/WindshieldIcon`

### Moved Icons

- `outline/EnergyIcon` → `filled/EnergyIcon`
- `outline/Star2Icon` → `filled/Star2Icon`
- `outline/StarsIcon` → `filled/StarsIcon`
- `outline/WinterIcon` → `filled/WinterIcon`

## [2.2.0] - 2026-05-13

This release continues the icon naming standardization, especially around compound
English names and chart-related icons. It also removes several deprecated or duplicated
animation and chart icons.

## Changed

### Renamed Icons

#### Chars

- `CharacterExclamationmarkIcon` → `CharacterExclamationMarkIcon`
- `CharacterQuestionMarkIcon` → `CharacterQuestionMarkIcon`
- `QuestionmarkExclamationmarkIcon` → `QuestionExclamationMarkIcon`

#### Outline

- `AnimationAltIcon` → `AnimationAltOnIcon`
- `AnimationOffAltIcon` → `AnimationAltOffIcon`
- `Animation2OffIcon` → `AnimationOffIcon`
- `Animation2OnIcon` → `AnimationOnIcon`
- `BalkendiagramHorizontalIcon` → `BarChartHorizontalIcon`
- `BalkendiagramVertikalIcon` → `BarChartVerticalIcon`
- `Attention2Icon` → `CheckCircleIcon`
- `Kreis1Icon` → `Circle1Icon`
- `Kreis2Icon` → `Circle2Icon`
- `TimeIcon` → `ClockIcon`
- `Attention1Icon` → `ExclamationMarkCircleIcon`
- `AttentionIcon` → `ExclamationMarkTriangleIcon`
- `PointDiagramIcon` → `PointChartIcon`

## Removed

- `AnimationIcon`
- `CallIcon`
- `HalbkreisdiagramIcon`
- `HorizontalBarChartIcon`
- `KeyAltIcon`
- `KreisdiagramIcon`
- `VerticalBarChartIcon`

## [2.1.0] - 2026-05-13

This release introduces a broad icon naming standardization across the library,
improving consistency, readability, and discoverability. It also includes several
deprecated icon removals and new additions to the playground and icon set.

## Changed

### Renamed Icons

#### Chars

- `CharacterAusrufezeichenIcon` → `CharacterExclamationMarkIcon`
- `CharacterProzentIcon` → `CharacterPercentIcon`
- `CharacterPfundIcon` → `CharacterPoundIcon`
- `CharacterFragezeichenIcon` → `CharacterQuestionMarkIcon`
- `FragezeichenAusrufezeichenIcon` → `QuestionExclamationMarkIcon`

#### Filled

- `outline/HouseIcon` → `filled/HouseIcon`

#### Outline

- `BatteryincludedIcon` → `BatteryIncludedIcon`
- `CarEstateCarIcon` → `CarEstateCarIcon`
- `CardIcon` → `CartIcon`
- `DownIcon` → `ChevronDownIcon`
- `SideIcon` → `ChevronRightIcon`
- `ToothwheelIcon` → `CogwheelIcon`
- `RestaurantIcon` → `Cutlery2Icon`
- `CultureIcon` → `EarthIcon`
- `FamilieIcon` → `FamilyIcon`
- `LiniendiagramIcon` → `LineChart2Icon`
- `LiveModeOffAltIcon` → `LiveModeOffXIcon`
- `LiveModeAltIcon` → `LiveModeOnCheckIcon`
- `LiveModeIcon` → `LiveModeOnIcon`
- `LiveausgabeOffIcon` → `LiveOffIcon`
- `LiveOutputAltIcon` → `LiveOnCheckIcon`
- `LiveausgabeOnIcon` → `LiveOnIcon`
- `LiveOutputOffAltIcon` → `LiveOnXIcon`
- `FrameLockAltIcon` → `LockCheckIcon`
- `FrameLockIcon` → `LockIcon`
- `FrameLockOffIcon` → `LockOpenIcon`
- `FrameLockOffAltIcon` → `LockOpenXIcon`
- `Map3Icon` → `MapPencilIcon`
- `Map1Icon` → `MapStarIcon`
- `MotorbikeLightweight2Icon` → `MotorbikeLightweight2Icon`
- `MultiplyPollIcon` → `MultiplePollIcon`
- `MusicHandyIcon` → `MusicPhoneIcon`
- `ParralelHorizontal1Icon` → `ParallelHorizontal1Icon`
- `ParralelHorizontalIcon` → `ParallelHorizontalIcon`
- `ParralelVerticalIcon` → `ParallelVerticalIcon`
- `Parkingassistent1Icon` → `ParkingAssistent1Icon`
- `Parkingassistent2Icon` → `ParkingAssistent2Icon`
- `PaypalPpIcon` → `PaypalSmallIcon`
- `SmartphonesettingsIcon` → `PhoneSettingsIcon`
- `Navigation2Icon` → `PinIcon`
- `PunktdiagramIcon` → `PointChartIcon`
- `Program2Icon` → `Program2Icon`
- `Program3Icon` → `Program3Icon`
- `ProgramIcon` → `ProgramIcon`
- `QrcodeIcon` → `QrCodeIcon`
- `DynamicIcon` → `RefreshIcon`
- `ComputerIcon` → `ServerIcon`
- `SleepdetectionIcon` → `SleepDetectionIcon`
- `SlidedoorIcon` → `SlidingDoorIcon`
- `SteeringwheelIcon` → `SteeringWheelIcon`
- `Streetsign30Icon` → `StreetSign30Icon`
- `Streetsign50Icon` → `StreetSign50Icon`
- `Streetsign60Icon` → `StreetSign60Icon`
- `Streetsign90Icon` → `StreetSign90Icon`
- `OtherIcon` → `TripleDotsIcon`
- `Userlist2Icon` → `UserList2Icon`
- `UserlistIcon` → `UserListIcon`
- `MicroIcon` → `MicrophoneIcon`
- `MicrophoneIcon` → `SpeakerIcon`

## Removed

Those were duplicates of the same, already existing icon.

- `ContextIcon`
- `ExclamationTriangleIcon`
- `FramesperreOffIcon`
- `FramesperreOnIcon`
- `LeadList2Icon`
- `LeadListIcon`
- `LifestyleIcon`
- `LiveOutputIcon`
- `LiveOutputOffIcon`
- `LivemodusOffIcon`
- `LivemodusOnIcon`
- `Map2Icon`
- `MicroIcon`
- `MultiplyChoiceIcon`
- `NumberIcon`
- `ScanlyIcon`
- `SliderPollIcon`

## [2.0.0] - 2026-05-13

This version contains breaking import changes, as icons have been renamed and recategorized,
requiring that imports of those icons are adjusted when upgrading to v2.0.0.

## Added

- Added a new category "Chars" where numbers, letters, and char-symbols are moved to.
- Added a playground for better icon overview and searchability, this includes:
  - Category selection
  - Name searching
  - Check out older released package versions

## Changed

- Moved `XIcon` and `CheckIcon` to a new category called `filled`

## Fixed

- Fixed inconsistent naming of the `LeadList2Icon`

## [1.2.1] - 2026-05-13

### Added

- Two new outline icons added

### Changed

- Renamed `PaperplaneIcon2.tsx` → `Paperplane2Icon.tsx` with export `Paperplane2Icon`
- Renamed `PaperplaneIcon2Icon.tsx` → `Paperplane3Icon.tsx` with export `Paperplane3Icon`
- Renamed `PaperplaneIcon3Icon.tsx` → `Paperplane4Icon.tsx` with export `Paperplane4Icon`

## [1.2.0] - 2026-05-13

### Added

- Fifty-seven new outline icons added

## [1.1.0] - 2026-05-07

### Updated

- Updated icon paths and added new icons

## [1.0.1] - 2026-04-14

### Fixed

- Adjusted icon exports

## [1.0.0] - 2026-04-14

Initial release
