/**
 * Configuration for resilience tool map preprocessing.
 */
config = {
    "inputs": {
        // model input data
        "data": "phl/df_phl_iso.csv",

    },
    // model outputs
    "outputs": ['risk', 'resilience', 'risk_to_assets'],
    "layers": {
        // shapefile layers to convert to topojson
        "model_features": {
            // layer name in topojson
            "layer_name": "model_features",
            // input shapefile name - relative to index.js
            "shape_file": "phl/shp/PHL_adm1.shp",
            // fields to preserve from input to output
            "filter_fields": "NAME_1",
            // join field on input data
            "data_join_field": "province",
            // join field on shpapefile
            "shp_join_field": "NAME_1",
        }
    },
    "map": {
        // ploygon simplification tolerance
        "simplify_poly": "20%",
        // line simplification tolerance
        "simplify_line": "20%",
        // svg/topojson width and height
        "width": 500,
        "height": 530,
        "margin": 15,
        "projection": 'd3.geo.equirectangular()'
    },
    "svg": {
        // svg styles
        "styles": {
            "nodata": {
                "fill": "#E0E0E0"
            },
        }
    },
    // the topojson output filename
    "topojson_out": "map_data.topojson"
}

module.exports = config;