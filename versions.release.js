/**
 Original source: https://github.com/BiosNod/Live-data-loader.git

 🧡 Bring back some data for your game and have fun
 Our discord invite: https://discord.gg/MfxYRNdD9x

 🧡 Please make pull request to the original repository if you have {client, version, suffix} from other versions

 {Client type, version, suffix} you can retrieve from dispatch (when login) from:
 https://oseurodispat**.yuansh**.com/query_cur_region?version=OSRELWin2.8.0&lang=1&platform=1&binary=1&time=90&channel_id=1&sub_channel_id=1&account_type=1&dispatchSeed=xxxxxx
 You need to decrypt response by key (yes, it's encrypted, before 3.2 use key 3, from 3.2 it's key 5)
 If you dunno about query_cur_region, about keys and how to decrypt the response - ask in #support or #development

 Known list:
 1.2_live --res 1627898_91f6370608 -b
 1.2_live --res 1771533_84f00c80ae --client 1816310_cf16f91abf --silence 1847412_b792271859
 1.3_live --res 1872772_6118ab1016 -b
 1.3_live --res 2079798_299eb183c6 --client 2189670_415e19bf37 --silence 2088824_487227b3c0
 1.4_live --client 2316848_6b1ce6c5b2 --silence 2316848_6b1ce6c5b2
 1.4_live --res 2147343_7e09fd6db0 -b
 1.4_live --res 2381708_53b1e84ce4 --client 2396714_52338ab3d4 --silence 2396714_52338ab3d4
 OSRELWin1.4.0_R2381708:53b1e84ce4_S2396714:52338ab3d4_D2396714:52338ab3d4
 OSRELWin1.5.0_R2663089:25a12eeea5_S2771742:99f775138c_D2762856:4ebb02e19b
 OSRELWin1.5.0_R2775769:c196739952_S2785677:dd8d2f28b5_D2780670:19133fa79e
 OSRELWin1.5.0_R2775769:c196739952_S2797188:f772fde953_D2808729:7a9522338e
 OSRELWin1.5.0_R2866676:eaf0bb745e_S2901119:aae6a5b3eb_D2934686:907ecc1dcb
 1.5_live --res 2578841_2f54353c16 -b
 1.5_live --res 2663089_25a12eeea5 --client 2762856_4ebb02e19b --silence 2771742_99f775138c
 1.5_live --res 2775769_c196739952 --client 2780670_19133fa79e --silence 2785677_dd8d2f28b5
 1.5_live --client 2808729_7a9522338e --silence 2797188_f772fde953
 1.5_live --res 2866676_eaf0bb745e --client 2934686_907ecc1dcb --silence 2901119_aae6a5b3eb
 1.6_live --res 3070488_2862694a85 -b
 1.6_live --res 3305047_ecff173daf --client 3353303_242157b1de --silence 3266913_b1501b6955
 1.6_live --res 3557509_5979a935f8 --client 3526661_2b3db51945
 1.6_live --client 3163037_a912c00ea4 --silence 3163037_a912c00ea4
 OSRELWin1.6.1_R3305047:ecff173daf_S3266913:b1501b6955_D3353303:242157b1de
 OSRELWin1.6.1_R3557509:5979a935f8_S3266913:b1501b6955_D3526661:2b3db51945
 OSRELWin2.0.0_R3696781:eb2d9ce860_S3774214:ef5e090f93_D3774214:ef5e090f93
 2.0_live --res 3617618_49462a674e -b
 2.0_live --res 3696781_eb2d9ce860 --client 3774214_ef5e090f93 --silence 3774214_ef5e090f93
 2.0_live --client 3804637_c78deabdb1 --silence 3788800_47abc13ddb
 OSRELWin2.2.0_R4547778:7237ac14c3_S4645171:60d2dd6b16_D4645171:60d2dd6b16
 2.2_live --res 4464168_15e305fa22 -b
 2.2_live --res 4547778_7237ac14c3 --silence 4645171_60d2dd6b16 --client 4645171_60d2dd6b16
 2.3_live --res 4861639_d46789fa5a -b
 OSRELWin2.3.0_R5134813:4ada34ec9f_S5082883:023295ee18_D5278928:9487c22876
 2.4_live --client 5692577_effa23b6c4 --silence 5692577_effa23b6c4
 2.4_live --res 5691054_b6bda5cd2b
 2.4_live --res 5233271_36b54fc9cd -b
 2.6_live --client 6731353_adfeb8be71 --silence 6731353_adfeb8be71
 2.6_live --res 6626848_04b2f48aaf
 2.6_live --res 6305792_c7157103d7 -b
 2.6_live --client 6641322_2afec624fe --silence 6641322_2afec624fe
 OSRELWin2.6.0_R6708157:7a34a36a6e_S6731353:adfeb8be71_D6731353:adfeb8be71
 OSRELWin2.7.0_R6855943:1490a59df9_S6801534:69e473b331_D6902895:d6252eb166
 OSRELWin2.7.0_R8029328:4cecb3db74_S8227893:b9d91614c6_D8227893:b9d91614c6
 OSRELWin2.8.0_R8589120:fc51cefe86_S8812249:af39852a33_D8644052:1ce48fca2c
 OSRELWin3.0.0_R10283122:ec58ff372e_S10446836:320895326e_D10316937:4fcac11e23
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10660688:b69559f811_D10693398:99e1a99fd2
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10660688:b69559f811_D10772333:09136b2529
 OSRELWin3.1.0_R10676272:ab446cd9d8_S10805493:3222597d09_D10772333:09136b2529
 OSRELWin3.1.0_R10916590:847ba6bd45_S10805493:3222597d09_D10941477:af48dac880
 OSRELWin3.2.0_R11149961:d6b14858bc_S11212885:766b0a2560_D11319614:f9c5287efd
 OSRELWin3.2.0_R11353770:6428631800_S11212885:766b0a2560_D11364183:175a3e3bff
 OSRELWin3.2.0_R11353770:6428631800_S11212885:766b0a2560_D11404032:d92901d0b2
 OSRELWin3.2.0_R11468593:cb0b1a9c56_S11212885:766b0a2560_D11498071:3c3178adcd
 OSRELWin3.2.0_R11611027:8bf0cf5f3d_S11212885:766b0a2560_D11643430:3a8c4fc04c
 OSRELWin3.2.0_R11611027:8bf0cf5f3d_S11212885:766b0a2560_D11793813:1bb7eba264
 3.2 output_11611739_50a8ffbbbd  - iOS exclusive
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D11990274:d46e5e55e2 - day1 hotfix
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12100776:793a112718 - maybe BP issue fix?
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12136874:f3a4b38d81
 OSRELWin3.3.0_R11972804:a46af65d51_S11938958:b040c0ebeb_D12238912:e3a8cb3c35
 OSRELWin3.3.0_R12335344:2474549507_S12361027:f6d6187d41_D12361027:f6d6187d41
 OSRELWin3.3.0_R12335344:2474549507_S12451827:2d419b12a6_D12361027:f6d6187d41
 OSRELWin3.4.0_R12707997:bf4adced0e_S12671397:9e164143ef_D12723272:f607c5b3e3
 OSRELWin3.4.0_R12707997:bf4adced0e_S12671397:9e164143ef_D12787608:ddd0d98162

 *
 * Short pattern:
 * ${buildName}${version}_R${resClientVersion}:${resClientSuffix}_S${silentClientVersion}:${silentClientSuffix}_D${clientVersion}:${clientSuffix}
 *
 * Long pattern:
 * @type {{"version_live": [{res: {Suffix: string, Version: number}, clientSilence: {Suffix: string, Version: number}, client: {Suffix: string, Version: number}}]}}
 */

const list = {
  "3.2_live": [
    {
      res: { Version: 11149961, Suffix: "d6b14858bc" }, // Patch lama
      clientSilence: { Version: 11212885, Suffix: "766b0a2560" },
      client: { Version: 11319614, Suffix: "f9c5287efd" },
    },

    {
      res: { Version: 11353770, Suffix: "6428631800" },
      client: { Version: 11364183, Suffix: "175a3e3bff" },
    },

    {
      client: { Version: 11404032, Suffix: "d92901d0b2" },
    },

    {
      res: { Version: 11611027, Suffix: "8bf0cf5f3d" }, // Patch paling baru - ResVersionConfig > versionSuffix
      client: { Version: 11793813, Suffix: "1bb7eba264" }, // clientDataVersion > 11793813 (baru) | 11212885 > clientSilenceDataVersion (lama) |  1bb7eba264 > clientVersionSuffix (baru) | 766b0a2560 > clientSilenceVersionSuffix (lama) | 11611027 > resVersionConfig in version (baru) | 8bf0cf5f3d > resVersionConfig in versionSuffix (baru)
    },
  ],
};

module.exports = { list };
