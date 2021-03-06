'use strict';

/**
 * Row.js controller
 *
 * @description: A set of functions called "actions" for managing `Row`.
 */

module.exports = {

  /**
   * Retrieve row records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.row.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a row record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.row.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an row record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.row.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an row record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.row.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an row record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.row.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
