import type { Schema, Struct } from '@strapi/strapi';

export interface CgfCvpListItem extends Struct.ComponentSchema {
  collectionName: 'components_cgf_cvp_list_items';
  info: {
    displayName: 'cvp_list_item';
  };
  attributes: {
    media_item: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    subTitle_item: Schema.Attribute.String & Schema.Attribute.Required;
    title_item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OnBroadingCasaGuideselfieListItem
  extends Struct.ComponentSchema {
  collectionName: 'components_on_broading_casa_guideselfie_list_items';
  info: {
    description: '';
    displayName: 'guideselfie_list_item';
  };
  attributes: {
    media: Schema.Attribute.String;
    title_media: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OnBroadingCasaListItem extends Struct.ComponentSchema {
  collectionName: 'components_on_broading_casa_list_items';
  info: {
    description: '';
    displayName: 'list_item';
  };
  attributes: {
    media_item: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface OnBroadingCasaOrganicListcreditcard
  extends Struct.ComponentSchema {
  collectionName: 'components_on_broading_casa_organic_listcreditcards';
  info: {
    displayName: 'organic_listcreditcard';
  };
  attributes: {
    image_card: Schema.Attribute.String & Schema.Attribute.Required;
    url_card: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OnBroadingCasaOrganicSuccessListItem
  extends Struct.ComponentSchema {
  collectionName: 'components_on_broading_casa_organic_success_list_items';
  info: {
    description: '';
    displayName: 'organic_success_list_item';
  };
  attributes: {
    description_item: Schema.Attribute.String & Schema.Attribute.Required;
    image_item: Schema.Attribute.String & Schema.Attribute.Required;
    title_item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cgf.cvp-list-item': CgfCvpListItem;
      'on-broading-casa.guideselfie-list-item': OnBroadingCasaGuideselfieListItem;
      'on-broading-casa.list-item': OnBroadingCasaListItem;
      'on-broading-casa.organic-listcreditcard': OnBroadingCasaOrganicListcreditcard;
      'on-broading-casa.organic-success-list-item': OnBroadingCasaOrganicSuccessListItem;
    }
  }
}
