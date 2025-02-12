import type { Schema, Struct } from '@strapi/strapi';

export interface OnbroadingCasaVNeId1323234 extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_1323234s';
  info: {
    displayName: '1323234';
  };
  attributes: {
    ewrwer: Schema.Attribute.String;
  };
}

export interface OnbroadingCasaVNeIdCvpListHtml extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_cvp_list_htmls';
  info: {
    displayName: 'cvp_list_html';
  };
  attributes: {
    cvp_feature_key: Schema.Attribute.String & Schema.Attribute.Required;
    cvp_html_url: Schema.Attribute.String;
  };
}

export interface OnbroadingCasaVNeIdCvpListItem extends Struct.ComponentSchema {
  collectionName: 'components_onbroading_casa_v_ne_id_cvp_list_items';
  info: {
    description: '';
    displayName: 'cvp_list_Item';
  };
  attributes: {
    cvp_media_item: Schema.Attribute.String;
    cvp_order: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'onbroading-casa-v-ne-id.1323234': OnbroadingCasaVNeId1323234;
      'onbroading-casa-v-ne-id.cvp-list-html': OnbroadingCasaVNeIdCvpListHtml;
      'onbroading-casa-v-ne-id.cvp-list-item': OnbroadingCasaVNeIdCvpListItem;
    }
  }
}
