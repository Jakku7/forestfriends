'use strict';

/**
 * Menu.js controller
 *
 * @description: A set of functions called "actions" for managing `Menu`.
 */

module.exports = {

  /**
   * Retrieve menu records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.menu.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a menu record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.menu.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an menu record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.menu.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an menu record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.menu.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an menu record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.menu.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
