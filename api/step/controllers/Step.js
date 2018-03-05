'use strict';

/**
 * Step.js controller
 *
 * @description: A set of functions called "actions" for managing `Step`.
 */

module.exports = {

  /**
   * Retrieve step records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.step.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a step record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.step.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an step record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.step.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an step record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.step.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an step record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.step.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
