import { BaseAdapter, FetchOptions, SimpleAdapter } from "../../adapters/types";
import { addOneToken } from "../../helpers/prices";

const config: any = {
  bsc: {
    wom: "0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1",
    veWom: "0x3DA62816dD31c56D9CdF22C6771ddb892cB5b0Cc",
    pools: {
      mainPool: "0x312bc7eaaf93f1c60dc5afc115fccde161055fb0",
      bnbPool: "0x0029b7e8e9eD8001c868AA09c74A1ac6269D4183",
      sidePool: "0x0520451B19AD0bb00eD35ef391086A692CFC74B2",
      wmxWom: "0xeEB5a751E0F5231Fc21c7415c4A4c6764f67ce2e",
      mWOM: "0x083640c5dBD5a8dDc30100FB09B45901e12f9f55",
      qWOM: "0x2c5464b9052319e3d76f8279031f04e4B7fd7955",
      Innovation: "0x48f6A8a0158031BaF8ce3e45344518f1e69f2A14",
      BNBx: "0x8df1126de13bcfef999556899F469d64021adBae",
      stkBNB: "0xB0219A90EF6A24a237bC038f7B7a6eAc5e01edB0",
      iUSD: "0x277E777F7687239B092c8845D4d2cd083a33C903",
      axlUSDC: "0x8ad47d7ab304272322513eE63665906b64a49dA2",
      USDD: "0x05f727876d7C123B9Bb41507251E2Afd81EAD09A",
      BOB: "0xeA6cDd9e8819BbF7f8791E7D084d9F0a6Afa7892",
      frxETH: "0x2Ea772346486972E7690219c190dAdDa40Ac5dA4",
      stableGuildPool: "0x9498563e47D7CFdFa22B818bb8112781036c201C", // USD+ pool
      mim: "0xb8b1b72a9b9ba90e2539348fec1ad6b265f9f684",
      ankrBNB: "0x6f1c689235580341562cdc3304e923cc8fad5bfa",
      bnby: "0xbed9B758A681d73a95Ab4c01309C63aa16297b80",
      smartHAY: "0xa61dccC6c6E34C8Fbf14527386cA35589e9b8C27",
      wBETH: "0x8b892b6Ea1d0e5B29b719d6Bd6eb9354f1cDE060",
      ankrETH: "0x1b507b97c89eDE3E40d1b2Ed92972197c6276D35",
      rbnb: "0x0592083B285aa75B9c8BaD2485C6cCCF93cCC348",
      SnBNB: "0xF1e604e9A31c3b575f91CF008445B7ce06BF3fef",
      USDS: "0x0c735f84BD7EDA8F8176236091AF8068Bb6C41dE",
      crossChainPool: "0x1ee15673e07105Bcf360139fa8CafeBDd7754BeF",
      zBNB: "0x9a39f4AB3f52026432835dEe6D3DB721D95f3D28",
      zUSD: "0xC26b7Cbe7e695a0d11a8cB96140D1Cd502945A2C",
      USDV: "0xC897a2Ae2E45f0D7ba8cbE397208C3e9f8914A9f",
    },
  },
  arbitrum: {
    wom: "0x7b5eb3940021ec0e8e463d5dbb4b7b09a89ddf96",
    veWom: "0x488B34F704a601DAeEf14135146a3dA79F2d3EFC",
    pools: {
      mainPool: "0xc6bc781e20f9323012f6e422bdf552ff06ba6cd1",
      wmxWom: "0xEE9b42b40852a53c7361F527e638B485D49750cD",
      mWOM: "0x90eCddEC4E4116E30769A4e1EA52c319aca338B6",
      qWOM: "0x12Fa5AB079CFf564d599466d39715D35d90Af978",
      overnight: "0xCF20fDA54e37f3fB456930f02fb07FccF49e4849", // USD+ pool
      frxETH: "0x20D7ee728900848752FA280fAD51aF40c47302f1",
      frax: "0x4a8686df475D4c44324210FFA3Fc1DEA705296e0", // FRAX-MAI-USD+
      bob: "0x917caF2b4D6040a9D67A5F8CEfC4F89d1b214c1A",
      mim: "0x29eeB257a2A6eCDE2984aCeDF80A1B687f18eC91",
      jUSDC: "0xc7a6bA5F28993BaDb566007bD2E0CB253c431974",
      ankrETH: "0xB9bdfE449Da096256Fe7954Ef61A18eE195Db77B",
      wstETH: "0xe14302040c0A1eb6fB5A4A79EfA46D60029358d9",
      pendle: "0xe7159f15e7b1d6045506B228A1ed2136dcc56F48",
      fUSD: "0x956454C7BE9318863297309183C79b793D370401",
      crossChainPool: "0xe78876C360716f2225F55A6726B32324FE1B1145",
      USDV: "0xa6eF6C45EbFDBc13f6D032fbDFeC9b389C1603E5",
      sFRAX: "0xaBF19eAdb08693278FdbAD35Cb4E3c1D6484c8Bb",
    },
  },
  ethereum: {
    wom: "0xc0B314a8c08637685Fc3daFC477b92028c540CFB",
    veWom: "0xEF0B4d9Dba6ea82B59437Fe5E37b16A2896aAF94",
    pools: {
      frax: "0x9c02eaf31EFE3FeE36ebE5AEBCa12Ca979dF25cC",
      agEUR: "0x0020A8890e723CD94660A5404C4BCCBB91680db6",
      frxETH: "0x3161f40EA6c0C4cC8b2433d6D530EF255816E854",
      wstETH: "0xF8E32cA46AC28799c8FB7DCe1Ac11A4541160734",
      ETHx: "0x647CC8816C2d60A5fF4d1ffeF27a5b3637d5ac81",
      crossChainPool: "0xA45C0ABeef67C363364E0e73832df9986aBa3800",
      USDV: "0x05A33c0eaf81367Ce953d2dCd4ea1BE8758f4D32",
    },
  },
  // does not have wom yet
  scroll: {
    wom: "",
    veWom: "",
    pools: {
      crossChainPool: "0x80f088ae72DB6d1AC337340cd6Aa0EB1F67337CE",
    },
  },
  avax: {
    wom: "0xa15E4544D141aa98C4581a1EA10Eb9048c3b3382",
    veWom: "0x34E2F923bBa206358EcE221af73E8d121837F873",
    pools: {
      crossChainPool: "0xC9bFC3eFeFe4CF96877009F75a61F5c1937e5d1a",
      sAVAX: "0xE3Abc29B035874a9f6dCDB06f8F20d9975069D87",
      USDV: "0x108c990c93Fa8E3cD88DDb13594D39f09D9B3C02",
      ggAVAX: "0xBbA43749efC1bC29eA434d88ebaf8A97DC7aEB77",
    },
  },
  base: {
    wom: "0xD9541B08B375D58ae104EC247d7443D2D7235D64",
    veWom: "0x34E2F923bBa206358EcE221af73E8d121837F873",
    pools: {
      crossChainPool: "0xC9bFC3eFeFe4CF96877009F75a61F5c1937e5d1a",
      USDS: "0x20d7B9Ed2c4E2DCC55F9B463975b21bBf2A6eCd1",
    },
  },
  optimism: {
    wom: "0xd2612b256f6f76fea8c6fbca0bf3166d0d13a668",
    veWom: "0xE91cfd7f8e5A5a1EA4803FcF781e1C8d6FfCa279",
    pools: {
      crossChainPool: "0x50a39b94B1Dc8472faa08c36a3Ef5b0A01c5BD10",
      USDV: "0x1a023186eF2994249120CC7fAEdBEA07F40C6fbd",
      frax: "0x6BB82A9b0b9b9716B885baeEfDBE47b685a0F919",
      dola: "0x489818F2eeAef737105887710F7C5b9323Ad3d01",
      frxETH: "0xB86BA65b75D34402bf377cF83b184554a18Fcafa",
    },
  },
};

const adapter: SimpleAdapter = {
  version: 2,
  adapter: {},
};

Object.keys(config).forEach((chain) => {
  (adapter.adapter as BaseAdapter)[chain] = { fetch }
})

export default adapter;


async function fetch({ chain, getLogs, createBalances, }: FetchOptions) {
  const pools = Object.values(config[chain].pools)
  const dailyVolume = createBalances()
  const eventAbi = "event Swap (address indexed sender, address fromToken, address toToken, uint256 fromAmount, uint256 toAmount, address indexed to)"
  const logs = await getLogs({ targets: pools as any, eventAbi })
  logs.forEach((log: any) => {
    const { fromToken, toToken, fromAmount, toAmount } = log
    addOneToken({ chain, balances: dailyVolume, token0: fromToken, amount0: fromAmount, token1: toToken, amount1: toAmount })
  })
  return { dailyVolume, dailyFees: dailyVolume.clone(0.0004) }
}