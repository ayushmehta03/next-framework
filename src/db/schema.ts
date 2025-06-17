import {pgTable,serial,varchar,boolean,timestamp,integer,text} from "drizzle-orm/pg-core"
import {relations } from "drizzle-orm";

export const costumers= pgTable("customers",{
    id:serial("id").primaryKey(),
    firstName:varchar("first_name").notNull(),
    lastName:varchar("last_name").notNull(),
    email:varchar("email").unique().notNull(),
    phone:varchar("phone").unique().notNull(),
    address1:varchar("address1").notNull(),
    address2:varchar("address2").notNull(),
    city:varchar("city").notNull(),
    state:varchar("state",{length:2}).notNull(),
    zip:varchar("zip",{length:6}).notNull(),
    notes:text("notes"),
    active:boolean("active").notNull().default(true),
    createdAt:timestamp("created_at").notNull().defaultNow(),
    updatedAt:timestamp("updated_at").notNull().defaultNow().$onUpdate(()=>new Date()),

})

export const tickets = pgTable("tickets", {
  id: serial("id").primaryKey(),
  costumerId: integer("costumer_id").notNull().references(() => costumers.id),
  title: varchar("title").notNull(),
  description: text("description"),
  completed: boolean("completed").notNull().default(false),
  tech: varchar("tech").notNull().default("unassigned"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
});

export const costumersRelations= relations(costumers,({many})=>({
    tickets:many(tickets),
})
)

export const ticketsRelations=relations(tickets,({one})=>({
    costumer:one(costumers,{
        fields:[tickets.costumerId],
        references:[costumers.id]
    })
}))