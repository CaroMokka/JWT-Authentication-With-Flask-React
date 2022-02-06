"""empty message

Revision ID: 8576d0add3d8
Revises: 2807edd385a2
Create Date: 2022-02-04 17:38:38.688583

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8576d0add3d8'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('name', sa.String(length=80), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'name')
    # ### end Alembic commands ###