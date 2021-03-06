interface Links {
  self: string
  plant: string
  genus: string
}

export interface Image {
  id: number
  image_url: string
  copyright: string
}


interface MainSpecies {
  id: number
  images: { [key: string]: Image[] }
}

export interface Plant {
  id: number
  slug: string
  scientific_name: string
  year: number
  bibliography: string
  author: string
  status: string
  rank: string
  common_name: string
  family_common_name: string
  genus_id: number
  image_url: string | null
  synonyms: string[]
  genus: string
  family: string
  links: Links
  images: any
  main_species: MainSpecies
}

export type Plants = Plant[]
